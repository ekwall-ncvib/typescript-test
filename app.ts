console.log("Started");

function nisse(): void {
    try {
        let mainDiv: HTMLElement = document.getElementById("mainDiv");
        mainDiv.innerText = "Ready again";
    } catch (error) {
        console.log("error");
    } finally {
        console.log("done");
    }
}

let mainDiv: HTMLElement = document.getElementById("mainDiv");

mainDiv.innerHTML = "Ready";

setTimeout(() => { nisse(); }, 2000);