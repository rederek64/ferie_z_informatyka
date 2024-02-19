const texts = {
    "def": `Fraktal nie ma określonej definicji (łac. fractus – złamany, cząstkowy), to obiekt, którego fragment w powiększeniu wygląda podobnie jak całość. Fraktale możemy dowolnie powiększać i nadal widzimy tę samą powtarzającą się strukturę.`,
    "przyroda": `Przykładami fraktali w przyrodzie są m.in. drzewa, płatki śniegu i chmury.`,
    "sztuka": `Świetnym przykładem zastosowania fraktali w sztuce są obrazy Jacksona Pollocka. Na jego płótnach wzór składa się z kilku dużych zawijasów, kilku średniej wielkości zawijasów i bardzo wielu małych zawijasów. Są one do siebie podobne: małe zawijasy są mniejszymi kopiami tych większych.`,
    "architektura": `Dobrym przykładem występowania fraktali w architekturze jest bazylika Sagrada Familia w Barcelonie. Antonio Gaudi w swoim projekcie uwzględnił struktury fraktalne na podstawie obserwacji roślin. Zauważył wzory i fraktale w tym, jak liść łączy się z łodygą i ile światła dostaje. Wykorzystując geometrię fraktalną, zmaksymalizował ilość światła wpadającego do tego monumentalnego budynku.`,
    "matematyka": `Do tworzenia fraktali matematycznych wykorzystuje się geometrię fraktalną (IFS).  Dzięki funkcjom, algorytmom i wzorom powstają fraktale, zbiory o względnie prostej definicji matematycznej i naturalnym (poszarpanym lub kłębiastym) wyglądzie. Przykładami takich matematycznych fraktali są m.in. funkcja Weierstrassa, krzywa Kocha, krzywa Peana i krzywa Lévy’ego, smok Heighwaya, kostka Mengera, paproć Barnsleya, zbiór Julii, kostka Cantora.`
} 

const imgs = {
    "przyroda": "https://tvn24.pl/najnowsze/cdn-zdjecie-u2o3e8-brokul-brokuly-naturalne-fraktale-w-przyrodzie-6092882/alternates/FREE_840",
    "sztuka": "https://rynekisztuka.pl/wp-content/uploads/2017/06/jackson-pollock-untitled-gouache-ok-1945-1949-j.-levine-auction-appraisal.png",
    "architektura": "https://tvn24.pl/najnowsze/cdn-zdjecie44b01211594c5e144ed928e31bae6440-widok-na-sagrada-familia-z-casa-mila-970521/alternates/FREE_840",
    "matematyka": "",
    "def": ""
}

function def(id) {
    document.querySelector('.def').innerText = texts[id];
    document.querySelector(".def_img").src = imgs[id];
}