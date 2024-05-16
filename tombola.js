document.addEventListener("DOMContentLoaded", function() {
    const board = document.getElementById("board");
    const drawButton = document.getElementById("drawButton");
    const clearButton = document.getElementById("clearButton"); // Riferimento al bottone di pulizia
    const cells = [];
    const drawnNumbersContainer = document.getElementById("drawnNumbers");
  
    for (let i = 1; i <= 76; i++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.textContent = i;
      board.appendChild(cell);
      cells.push(cell);
    }
  
    const drawnNumbers = new Set();
  
    function drawNumber() {
      let randomNumber;
      do {
        randomNumber = Math.floor(Math.random() * 76) + 1;
      } while (drawnNumbers.has(randomNumber));
      
      drawnNumbers.add(randomNumber);
      return randomNumber;
    }
  
    function highlightCell(number) {
      cells[number - 1].classList.add("highlighted");
    }
  
    function clearBoard() { // Funzione per ripulire la tabella
      drawnNumbers.clear();
      drawnNumbersContainer.innerHTML = "";
      cells.forEach(cell => {
        cell.classList.remove("highlighted");
      });
    }
  
    function updateDrawnNumbers() {
      drawnNumbersContainer.innerHTML = "";
      drawnNumbers.forEach(number => {
        const numberElement = document.createElement("span");
        numberElement.textContent = number;
        numberElement.classList.add("drawnNumber");
        drawnNumbersContainer.appendChild(numberElement);
      });
    }
  
    drawButton.addEventListener("click", function() {
      const number = drawNumber();
      highlightCell(number);
      updateDrawnNumbers();
    });
  
    clearButton.addEventListener("click", function() { // Aggiungi un listener per il click sul bottone di pulizia
      clearBoard();
    });
  });
  