# Gmail: Purge Old Unread

Google Apps Script, který přesune do koše všechny **nepřečtené** e-maily starší než **1 měsíc**.

> ⚠️ Pozor: Nevratná operace. Používej na vlastní riziko.

## Použití
1. V Gmailu otevři **Extensions → Apps Script**.
2. Vlož kód z `purgeOldUnread.gs`.
3. Uprav dotaz v `query` pokud chceš.
4. Spusť funkci `purgeOldUnread` (první běh vyžádá autorizaci).
5. (Volitelné) Naplánuj spouštění přes **Triggers** (např. denně).

## Dotaz (Gmail search)
