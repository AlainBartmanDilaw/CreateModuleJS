class Animal {
    constructor(theName, domElement, ownerName, ownerAddress) {
        this.name = theName;
        this.totalDistance = 0;
        this.parentElement = domElement;
        this.owner = new Owner(ownerName, ownerAddress);
    }
    move(distanceInMeter = 0) {
        console.log(`${this.name} moved ${distanceInMeter}m.`);
        this.totalDistance += distanceInMeter;
    }
    display() {
        let containerDiv = document.getElementById(this.parentElement);
        let animalDiv = document.createElement("div");
        containerDiv.appendChild(animalDiv);
        animalDiv.innerText = "'" + this.name + "' total moves distance was " + this.totalDistance + "m.";
        animalDiv.innerText += "\nThe registreted owner is '" + this.owner.name + "' and he lives in " + this.owner.address + ".";
        animalDiv.innerHTML += "<hr>";
    }
}
