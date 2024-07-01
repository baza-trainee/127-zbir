import { BALANSE_URL } from "../const/consts";

const getBalance = async (callback) => {
  try {
    const response = await fetch(BALANSE_URL, {
      method: "GET",
    });

    if (response.ok) {
      const data = await response.json();
      const balance = Math.floor(data.amount / 100 || 0);
      callback(balance);
    } else {
      throw new Error(response.status.toString());
    }
  } catch (error) {
    console.error(
      "Помилка отримання даних, перевірте налаштування запитів.",
      error
    );
  }
};

export default getBalance;
