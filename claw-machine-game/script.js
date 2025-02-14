document.addEventListener("DOMContentLoaded", () => {
  const slots = ["20%", "30%", "50%", "BB3", "Winner"];
  const spinButton = document.getElementById("spin-button");
  const slot1 = document.getElementById("slot1");
  const slot2 = document.getElementById("slot2");
  const slot3 = document.getElementById("slot3");
  const resultDiv = document.getElementById("result");
  const spinSound = document.getElementById("spin-sound");
  const winSound = document.getElementById("win-sound");
  const bgMusic = document.getElementById("background-music");

  // Chạy nhạc nền
  bgMusic.play();

  spinButton.addEventListener("click", () => {
      spinButton.disabled = true;
      resultDiv.innerHTML = "";
      document.body.classList.remove("blur-background");

      spinSound.play();

      // Hiệu ứng quay
      slot1.classList.add("spin");
      slot2.classList.add("spin");
      slot3.classList.add("spin");

      setTimeout(() => {
          spinSound.pause(); // Tắt nhạc quay ngay sau khi kết thúc
          spinSound.currentTime = 0; 

          slot1.classList.remove("spin");
          slot2.classList.remove("spin");
          slot3.classList.remove("spin");

          slot1.innerText = "Tiga";
          slot2.innerText = "Studio";
          slot3.innerText = getRandomSlot();

          checkWin();
      }, 5000);
  });

  function getRandomSlot() {
      const random = Math.random() * 100;
      if (random < 40) return "20%";
      if (random < 75) return "30%";
      if (random < 90) return "BB3";
      if (random < 98) return "50%";
      return "Winner";
  }

  function checkWin() {
      if (slot1.innerText === "Tiga" && slot2.innerText === "Studio") {
          let prize = "";
          let message = "";
          switch (slot3.innerText) {
              case "20%": 
                  prize = "Voucher 20%"; 
                  message = "Chúc mừng bạn đã nhận được voucher 20%!"; 
                  break;
              case "30%": 
                  prize = "Voucher 30%"; 
                  message = "Chúc mừng bạn đã nhận được voucher 30%!"; 
                  break;
              case "BB3": 
                  prize = "1 lần bốc túi mù BB3"; 
                  message = "Chúc mừng bạn đã nhận được BB3!"; 
                  break;
              case "50%": 
                  prize = "Voucher 50%"; 
                  message = "Chúc mừng bạn đã nhận được voucher 50%!"; 
                  break;
              case "Winner": 
                  prize = "Voucher Free Gói Chụp"; 
                  message = "Chúc mừng bạn đã nhận được voucher 100%!"; 
                  break;
          }

          if (prize) {
              winSound.play();
              document.body.classList.add("blur-background");

              resultDiv.innerHTML = `
                  <b>${message}</b>
                  <br>
                  <button id="next-round">Lượt tiếp theo</button>
              `;

              // Xử lý sự kiện khi bấm "Lượt tiếp theo"
              document.getElementById("next-round").addEventListener("click", () => {
                  resultDiv.innerHTML = "";
                  document.body.classList.remove("blur-background");
                  spinButton.disabled = false;
              });
          } else {
              spinButton.disabled = false;
          }
      } else {
          spinButton.disabled = false;
      }
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const slots = ["20%", "30%", "50%", "BB3", "Winner"];
  const spinButton = document.getElementById("spin-button");
  const slot1 = document.getElementById("slot1");
  const slot2 = document.getElementById("slot2");
  const slot3 = document.getElementById("slot3");
  const resultDiv = document.getElementById("result");
  const spinSound = document.getElementById("spin-sound");
  const winSound = document.getElementById("win-sound");
  const bgMusic = document.getElementById("background-music");

  // Chạy nhạc nền
  bgMusic.play();

  spinButton.addEventListener("click", () => {
      spinButton.disabled = true;
      resultDiv.innerHTML = "";
      document.body.classList.remove("blur-background");

      spinSound.play();

      // Hiệu ứng quay
      slot1.classList.add("spin");
      slot2.classList.add("spin");
      slot3.classList.add("spin");

      setTimeout(() => {
          spinSound.pause(); // Tắt nhạc quay ngay sau khi kết thúc
          spinSound.currentTime = 0; 

          slot1.classList.remove("spin");
          slot2.classList.remove("spin");
          slot3.classList.remove("spin");

          slot1.innerText = "Tiga";
          slot2.innerText = "Studio";
          slot3.innerText = getRandomSlot();

          checkWin();
      }, 5000);
  });

  function getRandomSlot() {
      const random = Math.random() * 100;
      if (random < 40) return "20%";
      if (random < 75) return "30%";
      if (random < 90) return "BB3";
      if (random < 98) return "50%";
      return "Winner";
  }

  function checkWin() {
      if (slot1.innerText === "Tiga" && slot2.innerText === "Studio") {
          let prize = "";
          let message = "";
          switch (slot3.innerText) {
              case "20%": 
                  prize = "Voucher 20%"; 
                  message = "Chúc mừng bạn đã nhận được voucher 20%!"; 
                  break;
              case "30%": 
                  prize = "Voucher 30%"; 
                  message = "Chúc mừng bạn đã nhận được voucher 30%!"; 
                  break;
              case "BB3": 
                  prize = "1 lần bốc túi mù BB3"; 
                  message = "Chúc mừng bạn đã nhận được BB3!"; 
                  break;
              case "50%": 
                  prize = "Voucher 50%"; 
                  message = "Chúc mừng bạn đã nhận được voucher 50%!"; 
                  break;
              case "Winner": 
                  prize = "Voucher Free Gói Chụp"; 
                  message = "Chúc mừng bạn đã nhận được voucher 100%!"; 
                  break;
          }

          if (prize) {
              winSound.play();
              document.body.classList.add("blur-background");

              resultDiv.innerHTML = `
                  <b>${message}</b>
                  <br>
                  <button id="next-round">Lượt tiếp theo</button>
              `;

              // Xử lý sự kiện khi bấm "Lượt tiếp theo"
              document.getElementById("next-round").addEventListener("click", () => {
                  resultDiv.innerHTML = "";
                  document.body.classList.remove("blur-background");
                  spinButton.disabled = false;
              });
          } else {
              spinButton.disabled = false;
          }
      } else {
          spinButton.disabled = false;
      }
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const slots = ["20%", "30%", "50%", "BB3", "Winner"];
  const spinButton = document.getElementById("spin-button");
  const slot1 = document.getElementById("slot1");
  const slot2 = document.getElementById("slot2");
  const slot3 = document.getElementById("slot3");
  const resultDiv = document.getElementById("result");
  const spinSound = document.getElementById("spin-sound");
  const winSound = document.getElementById("win-sound");
  const bgMusic = document.getElementById("background-music");

  // Chạy nhạc nền
  bgMusic.play();

  spinButton.addEventListener("click", () => {
      spinButton.disabled = true;
      resultDiv.style.display = "none";
      document.body.classList.remove("blur-background");

      spinSound.play();

      // Hiệu ứng quay
      slot1.classList.add("spin");
      slot2.classList.add("spin");
      slot3.classList.add("spin");

      setTimeout(() => {
          spinSound.pause();
          spinSound.currentTime = 0; 

          slot1.classList.remove("spin");
          slot2.classList.remove("spin");
          slot3.classList.remove("spin");

          slot1.innerText = "Tiga";
          slot2.innerText = "Studio";
          slot3.innerText = getRandomSlot();

          checkWin();
      }, 5000);
  });

  function getRandomSlot() {
      const random = Math.random() * 100;
      if (random < 40) return "20%";
      if (random < 75) return "30%";
      if (random < 90) return "BB3";
      if (random < 98) return "50%";
      return "Winner";
  }

  function checkWin() {
      if (slot1.innerText === "Tiga" && slot2.innerText === "Studio") {
          let prize = "";
          let message = "";
          switch (slot3.innerText) {
              case "20%": 
                  prize = "Voucher 20%"; 
                  message = "Chúc mừng! Bạn đã nhận được voucher 20%!"; 
                  break;
              case "30%": 
                  prize = "Voucher 30%"; 
                  message = "Chúc mừng! Bạn đã nhận được voucher 30%!"; 
                  break;
              case "BB3": 
                  prize = "1 lần bốc túi mù BB3"; 
                  message = "Chúc mừng! Bạn đã nhận được BB3!"; 
                  break;
              case "50%": 
                  prize = "Voucher 50%"; 
                  message = "Chúc mừng! Bạn đã nhận được voucher 50%!"; 
                  break;
              case "Winner": 
                  prize = "Voucher Free Gói Chụp"; 
                  message = "Chúc mừng! Bạn đã nhận được voucher 100%!"; 
                  break;
          }

          if (prize) {
              winSound.play();
              document.body.classList.add("blur-background");

              resultDiv.innerHTML = `
                  <p>${message}</p>
                  <button id="next-round">Lượt tiếp theo</button>
              `;
              resultDiv.style.display = "block";

              document.getElementById("next-round").addEventListener("click", () => {
                  resultDiv.style.display = "none";
                  document.body.classList.remove("blur-background");
                  spinButton.disabled = false;
              });
          } else {
              spinButton.disabled = false;
          }
      } else {
          spinButton.disabled = false;
      }
  }
});
const symbols = [
  { name: "20%", weight: 40 }, 
  { name: "30%", weight: 35 }, 
  { name: "BB3", weight: 15 }, 
  { name: "50%", weight: 8 }, 
  { name: "Winner", weight: 2 }
];

const spinButton = document.getElementById("spin-button");
const slots = [document.getElementById("slot1"), document.getElementById("slot2"), document.getElementById("slot3")];
const resultDisplay = document.getElementById("result");
const nextRoundButton = document.createElement("button");

// Nhạc
const spinSound = document.getElementById("spin-sound");
const winSound = document.getElementById("win-sound");

// Hàm chọn biểu tượng ngẫu nhiên theo tỷ lệ
function getRandomSymbol() {
  let totalWeight = symbols.reduce((sum, sym) => sum + sym.weight, 0);
  let random = Math.random() * totalWeight;
  let cumulative = 0;

  for (let symbol of symbols) {
      cumulative += symbol.weight;
      if (random <= cumulative) {
          return symbol.name;
      }
  }
}

// Hàm quay số
function spinSlots() {
  spinSound.play();
  spinButton.disabled = true;
  resultDisplay.style.display = "none";

  let counter = 0;
  let spinInterval = setInterval(() => {
      slots[0].innerText = "Tiga";
      slots[1].innerText = "Studio";
      slots[2].innerText = getRandomSymbol();
      counter++;

      if (counter >= 25) {
          clearInterval(spinInterval);
          spinSound.pause();
          spinSound.currentTime = 0;
          checkWin();
          spinButton.disabled = false;
      }
  }, 200);
}

// Kiểm tra trúng thưởng
function checkWin() {
  let slotValues = slots.map(slot => slot.innerText);
  if (slotValues.includes("Tiga") && slotValues.includes("Studio")) {
      let rewardMessage = "";
      switch (slotValues[2]) {
          case "20%":
              rewardMessage = "Chúc mừng bạn đã nhận được voucher 20%";
              break;
          case "30%":
              rewardMessage = "Chúc mừng bạn đã nhận được voucher 30%";
              break;
          case "BB3":
              rewardMessage = "Chúc mừng bạn đã nhận được BB3";
              break;
          case "50%":
              rewardMessage = "Chúc mừng bạn đã nhận được voucher 50%";
              break;
          case "Winner":
              rewardMessage = "Chúc mừng bạn đã nhận được voucher 100%";
              break;
      }
      displayResult(rewardMessage);
  }
}

// Hiển thị thông báo trúng thưởng
function displayResult(message) {
  winSound.play();
  document.body.classList.add("blur-background");
  resultDisplay.innerHTML = `<p>${message}</p>`;
  nextRoundButton.innerText = "Lượt tiếp theo";
  nextRoundButton.id = "next-round";
  nextRoundButton.onclick = resetGame;
  resultDisplay.appendChild(nextRoundButton);
  resultDisplay.style.display = "block";
}

// Reset game
function resetGame() {
  resultDisplay.style.display = "none";
  document.body.classList.remove("blur-background");
}

// Lắng nghe sự kiện
spinButton.addEventListener("click", spinSlots);
