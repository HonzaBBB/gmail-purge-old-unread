// Přesouvá do koše emaily, které jsou nepřečtené a starší než jeden měsíc
function purgeOldUnread() {
  const query = 'is:unread older_than:1m -in:chats -in:spam -in:trash';
  const BATCH = 100;
  let total = 0, iter = 0;
  const started = Date.now();

  while (true) {
    const threads = GmailApp.search(query, 0, BATCH);
    if (threads.length === 0) break;

    GmailApp.moveThreadsToTrash(threads);
    total += threads.length; iter += 1;
    Logger.log('Batch %s: přesunuto %s vláken (celkem %s)', iter, threads.length, total);

    Utilities.sleep(500); // drobná pauza kvůli limitům

    // bezpečnost: skript má limit ~6 min, radši se sám ukončí a příště naváže
    if (Date.now() - started > 5.5 * 60 * 1000) {
      Logger.log('Konec kvůli časovému limitu, příště navážeme.');
      break;
    }
  }
  Logger.log('Hotovo. Celkem přesunuto: %s vláken.', total);
}
