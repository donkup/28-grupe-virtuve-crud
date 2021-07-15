class Kitchen {
    constructor(name) {
        this.produktuSarasas = [];
        this.name = name;
    }

    intro() {
        console.log(`Sveiki atvyke i ${this.name} virtuve ;)`);
    }

    nupirkta(pavadinimas, kiekis) {
        this.produktuSarasas.push({ pavadinimas, kiekis, nesugedes: true });
    }

    turimiProduktai() {
        let turimiProduktai = 0;
        for (let i = 0; i < this.produktuSarasas.length; i++) {
            const produktas = this.produktuSarasas[i];
            if (produktas.nesugedes) {
                console.log(

                    `${++turimiProduktai})${produktas.pavadinimas} : ${produktas.kiekis}`
                );

            }

        }
    }
    sunaudota(pavadinimas, naujasKiekis) {
        for (let i = 0; i < this.produktuSarasas.length; i++) {
            const produktas = this.produktuSarasas[i];
            if (produktas.pavadinimas === pavadinimas) {
                produktas.kiekis -= naujasKiekis;
            }

        }
    }
    sugedesProduktas(pavadinimas) {
        const naujasProduktuSarasas = [];
        for (let i = 0; i < this.produktuSarasas.length; i++) {
            const produktas = this.produktuSarasas[i];
            if (produktas.pavadinimas !== pavadinimas) {
                naujasProduktuSarasas.push(produktas)
            }

        }
        this.produktuSarasas = naujasProduktuSarasas;
    }
}
module.exports = Kitchen;