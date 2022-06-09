import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "mericbank",
  initialState: {
    users: [
      {
        id: 1,
        name: "Test",
        surname: "User",
        email: "testuser@gmail.com",
        password: "testuserpassword",
        money: 1000,
        transactions: [],
      },
    ],
    loggedUser: {},
    errors: { login: null, signup: null, transfer: null },
  },
  reducers: {
    createUser: (state, action) => {
      const found = state.users.find(
        (element) => element.email === action.payload.email
      );
      const randomId = Math.floor(Math.random() * 9999);
      const user = {
        id: randomId,
        name: action.payload.name,
        surname: action.payload.surname,
        email: action.payload.email,
        password: action.payload.password,
        money: 1000,
        transactions: [],
      };
      if (!found && action.payload.password === action.payload.rePassword) {
        state.users.push(user);
        state.errors.signup = null;
        state.loggedUser = user;
        History.navigate("/user/" + randomId);
      } else {
        state.errors.signup = "Kullanıcı Oluşturulamadı Tekrar Deneyiniz";
      }
    },
    loginUser: (state, action) => {
      const found = state.users.find(
        (element) => element.email === action.payload.email
      );
      if (found) {
        if (found.password === action.payload.password) {
          state.errors.login = null;
          state.loggedUser = found;
          History.navigate("/user/" + found.id);
        } else {
          state.errors.login = "kullanıcı adı veya şifre hatalı";
        }
      } else {
        state.errors.login = "kullanıcı adı veya şifre hatalı";
      }
    },
    logoutUser: (state) => {
      state.loggedUser = null;
    },
    transfer: (state, action) => {
      const found = state.users.find(
        (element) => element.email === action.payload.receiver
      );
      var amount = Number(action.payload.amount);
      if (found && found.email != action.payload.sender) {
        state.users.map((item) => {
          if (item.email === action.payload.sender) {
            if (item.money >= action.payload.amount) {
              item.transactions.push(action.payload);
              item.money = item.money - amount;
              state.loggedUser = item;
              state.errors.transfer = null;
              History.navigate("/user/" + item.id);
              state.users.map((item) => {
                if (item.email === action.payload.receiver) {
                  item.transactions.push(action.payload);
                  item.money = item.money + amount;
                }
              });
            } else {
              console.log(state.err);
              state.errors.transfer = "Bakiye Yetersiz!";
            }
          }
        });

        console.log(action.payload);
      } else {
        state.errors.transfer = "Alıcı E-mail Kayıtlı Değil!";
      }
    },
    deposit: (state, action) => {
      state.users.map((item) => {
        if (item.email === action.payload.email) {
          item.money = item.money + Number(action.payload.amount);
          item.transactions.push({
            sender: "*NAKİT YATIRMA*",
            receiver: action.payload.email,
            amount: action.payload.amount,
          });
          state.loggedUser = item;
        }
      });
    },
    withdraw: (state, action) => {
      state.users.map((item) => {
        if (item.email === action.payload.email) {
          if (item.money >= action.payload.amount) {
            item.money = item.money - Number(action.payload.amount);
            item.transactions.push({
              sender: action.payload.email,
              receiver: "*NAKİT ÇEKME*",
              amount: action.payload.amount,
            });
            state.loggedUser = item;
          } else {
            state.errors.transfer = "Bakiye Yetersiz!";
          }
        }
      });
    },
  },
});

export const {
  createUser,
  loginUser,
  logoutUser,
  transfer,
  deposit,
  withdraw,
} = userSlice.actions;

export default userSlice.reducer;
