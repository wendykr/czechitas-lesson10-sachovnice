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

const sachovnice = [
  /* Zde bude váš kód reprezentující rozehrané rozestavení. */
	[0, 0, 0, 0, 0, -4, -6, 0],
	[0, 0, 0, 0, 0, -1, -1, -1],
	[0, 0, -1, 0, 0, 0, 0, 0],
	[0, -1, 1, 0, -1, 0, 0, 0],
	[0, 1, 0, 0, 1, 0, 0, 0],
	[0, 0, 0, 0, 0, 3, 0, 1],
	[0, 0, 0, 0, 2, 1, 1, 0],
	[0, 0, 0, 0, 0, 0, 6, 0],
]

// Následující řádek zobrazí na stránce šachovnici s rozehraným rozestavení.
zobraz(sachovnice)

/*
Sem přijde váš kód, který na poli sachovnice provede tah koněm.
*/
sachovnice[3][4] = 3
sachovnice[5][5] = 0

// Následující řádek zobrazí na stránce šachovnici po provedeném tahu.
zobraz(sachovnice)