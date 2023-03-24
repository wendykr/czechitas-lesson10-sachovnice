# Práce s poli - Lekce 10

Cvičení do breakrooms pro kurz JavaScript 1 od Czechitas.

## 2. Šachovnice

Založte JavaScriptový program a vytvořte v něm pole pojmenované `sachovnice`, které bude reprezentovat rozehranou šachovou partii jako na obrázku.

![ukázka výsledku](https://kodim.cz/cms/assets/kurzy/javascript-vyuka/js-1/chyby-pole/cv-pole/cvlekce%3Esachovnice/sachovnice.png)

- Zkopírujte na začátek vašeho programu předpřipravenou funkci `zobraz`, pomocí které později zobrazíte šachovnici. Ve funkci není potřeba nic měnit.

```javascript
const zobraz = (data) => {
	const url = `https://czechitas-podklady.cz/vizualizace-sachovnice/?s=${JSON.stringify(
		data
	)}`
	document.body.innerHTML += `
		<div>
			<pre>${JSON.stringify(data)
				.replace('[[', '[<br/>\t[')
				.replace(']]', ']<br/>]')
				.replaceAll(',[', ',<br/>\t[')
				.replaceAll(',', ',\t')}</pre>
			<iframe src="${url}" width="550" height="420" frameBorder="0"></iframe>
			<hr/>
		</div>
		`
}
```

- Šachovnici reprezentujte jako pole polí, kde každý řádek šachovnice je reprezentován jako jedno pole. Políčka reprezentujte jako čísla dle následujícího klíče. Pro prázdné políčko použijte číselnou hodnotu `0`.

![ukázka výsledku](https://kodim.cz/cms/assets/kurzy/javascript-vyuka/js-1/chyby-pole/cv-pole/cvlekce%3Esachovnice/figury.png)

- Ověřte, že vaše pole má správnou podobu zavoláním funkce `zobraz(sachovnice)`.

- Pokračujte v kódu programu. Napište příkazy pro přesun bílého koně z pozice `f3` na pozici `e5`, kde sebere černého pěšce. Výsledkem by mělo být upravené pole obsahující nové pozice figurek.

![ukázka výsledku](https://kodim.cz/cms/assets/kurzy/javascript-vyuka/js-1/chyby-pole/cv-pole/cvlekce%3Esachovnice/vysledek.png)

- Opět ověřte, že vaše pole má správnou podobu zavoláním funkce zobraz(sachovnice).

**Nápověda**
Výsledný kód by měl vypadat následovně:

```javascript
const zobraz = (data) => {
	// Zde bude kód zkopírovaný ze zadání výše.
}

const sachovnice = [
	/* Zde bude váš kód reprezentující rozehrané rozestavení. */
]

// Následující řádek zobrazí na stránce šachovnici s rozehraným rozestavení.
zobraz(sachovnice)

/*
Sem přijde váš kód, který na poli sachovnice provede tah koněm.
*/

// Následující řádek zobrazí na stránce šachovnici po provedeném tahu.
zobraz(sachovnice)
```