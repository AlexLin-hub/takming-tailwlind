<template>
  <div>
    <div class="container flex h-screen w-[90%] flex-col py-10 lg:w-full">
      <!-- 標題 -->
      <div class="mb-7 grow-0">
        <h1 class="font-serif text-[48px] font-bold sm:text-[64px]">
          使用者列表
        </h1>
        <h3 class="text-[14px] text-[#999999] sm:text-xl">
          關於 RESTful API 實作練習
        </h3>
      </div>
      <div class="grid grow grid-cols-12 gap-5 overflow-auto">
        <!-- Left -->
        <div
          class="col-span-full overflow-y-auto rounded-[18px] bg-white py-6 px-5 lg:col-span-8"
        >
          <div class="grid grid-cols-12 gap-4">
            <!-- 01 -->
            <div
              v-for="item in items"
              :key="item.UID"
              class="col-span-full lg:col-span-6"
            >
              <!-- Card -->
              <Card
                :user="item"
                @select="triggerActions('select', $event)"
                @delete="triggerActions('delete', $event)"
              />
            </div>
          </div>
        </div>
        <!-- Right -->
        <div
          class="hidden overflow-y-auto rounded-[18px] bg-white py-6 px-5 lg:col-span-4 lg:block"
        >
          <div class="flex h-full flex-col gap-4">
            <h2 class="font-serif text-xl font-bold">使用者資訊</h2>
            <!-- 姓名 -->
            <input
              v-model="user.name"
              class="w-full rounded-lg bg-gray-light py-4 px-3 outline-gray-dark"
              type="text"
              placeholder="姓名"
            />
            <!-- 性別 -->
            <ul class="grid grid-cols-3 gap-x-3">
              <!-- man -->
              <li>
                <input
                  v-model="user.gender"
                  id="man"
                  class="peer hidden"
                  type="radio"
                  name="type"
                  value="M"
                />
                <label
                  for="man"
                  class="flex w-full cursor-pointer flex-col items-center justify-center rounded-lg border-[1px] border-transparent bg-gray-light py-2 text-secondary peer-checked:border-gray-dark peer-checked:text-primary hover:peer-enabled:bg-gray hover:peer-enabled:text-primary peer-disabled:text-gray-dark peer-checked:peer-disabled:border-gray peer-checked:peer-disabled:text-gray-dark"
                >
                  <!-- icon -->
                  <span class="mdi mdi-face-man text-[30px]"></span>
                  <!-- gender -->
                  <span class="text-xs">男</span>
                </label>
              </li>
              <!-- woman -->
              <li>
                <input
                  v-model="user.gender"
                  id="woman"
                  class="peer hidden"
                  type="radio"
                  name="type"
                  value="W"
                />
                <label
                  for="woman"
                  class="flex w-full cursor-pointer flex-col items-center justify-center rounded-lg border-[1px] border-transparent bg-gray-light py-2 text-secondary peer-checked:border-gray-dark peer-checked:text-primary hover:peer-enabled:bg-gray hover:peer-enabled:text-primary peer-disabled:text-gray-dark peer-checked:peer-disabled:border-gray peer-checked:peer-disabled:text-gray-dark"
                >
                  <!-- icon -->
                  <span class="mdi mdi-face-woman text-[30px]"></span>
                  <!-- gender -->
                  <span class="text-xs">女</span>
                </label>
              </li>
              <!-- unknow -->
              <li>
                <input
                  v-model="user.gender"
                  id="unknow"
                  class="peer hidden"
                  type="radio"
                  name="type"
                  value="O"
                />
                <label
                  for="unknow"
                  class="flex w-full cursor-pointer flex-col items-center justify-center rounded-lg border-[1px] border-transparent bg-gray-light py-2 text-secondary peer-checked:border-gray-dark peer-checked:text-primary hover:peer-enabled:bg-gray hover:peer-enabled:text-primary peer-disabled:text-gray-dark peer-checked:peer-disabled:border-gray peer-checked:peer-disabled:text-gray-dark"
                >
                  <!-- icon -->
                  <span class="mdi mdi-ninja text-[30px]"></span>
                  <!-- gender -->
                  <span class="text-xs">其他</span>
                </label>
              </li>
            </ul>
            <!-- 電子郵件 -->
            <input
              v-model="user.email"
              class="w-full rounded-lg bg-gray-light py-4 px-3 outline-gray-dark"
              type="email"
              placeholder="電子郵件"
            />
            <!-- 聯絡電話 -->
            <input
              v-model="user.phone"
              class="w-full rounded-lg bg-gray-light py-4 px-3 outline-gray-dark"
              type="tel"
              placeholder="聯絡電話"
            />
            <!-- 聯絡地址 -->
            <div class="flex gap-x-2">
              <!-- 郵遞區號 -->
              <input
                v-model.number="user.zip"
                class="w-[30%] rounded-lg bg-gray-light py-4 px-3 outline-gray-dark"
                type="number"
                placeholder="郵遞區號"
              />
              <!-- 地址 -->
              <input
                v-model="user.address"
                class="w-[70%] rounded-lg bg-gray-light py-4 px-3 outline-gray-dark"
                type="text"
                placeholder="地址"
              />
            </div>
            <!-- 動作 -->
            <div class="mt-auto">
              <!-- 新增 -->
              <div v-if="isCreate">
                <button
                  class="w-full rounded-lg bg-primary py-4 text-[14px] text-white disabled:cursor-not-allowed disabled:bg-gray disabled:text-gray-dark"
                  @click="triggerActions('create', user)"
                >
                  新增
                </button>
              </div>
              <!-- 取消/儲存 -->
              <div v-else class="flex gap-x-3">
                <!-- 取消 -->
                <button
                  class="w-full rounded-lg border-[1px] border-primary py-4 text-[14px] text-primary disabled:cursor-not-allowed disabled:border-gray disabled:text-gray-dark"
                  @click="triggerActions('cancel')"
                >
                  取消
                </button>
                <!-- 儲存 -->
                <button
                  class="w-full rounded-lg bg-primary py-4 text-[14px] text-white disabled:cursor-not-allowed disabled:bg-gray disabled:text-gray-dark"
                  @click="triggerActions('update', user)"
                >
                  儲存
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import Card from "../components/card.vue";
const { CID, SID } = { CID: "CID", SID: "SID" };
const headers = { CID, SID, "Content-Type": "application/json" };
const apiBaseURL = "https://api-takming.herokuapp.com/api/v1";

export default {
  components: { Card },
  created() {
    this.triggerActions("get");
  },
  data() {
    return {
      user: {
        name: "",
        gender: "M",
        phone: "",
        email: "",
        zip: "",
        address: "",
      },
      items: [],
      isCreate: true,
    };
  },
  methods: {
    async triggerActions(key, e) {
      try {
        switch (key) {
          case "get": {
            const res = await this.axiosAPI("GET");
            const { user } = res;
            this.items = user.slice(0);
            break;
          }
          case "create": {
            const { name, gender, email, phone, zip, address } = e;
            if (!name || !gender || !email || !phone || !zip || !address)
              return;
            console.log("create user", e);
            const user = await this.axiosAPI("POST", e);
            this.items.unshift(user);
            this.resetUser();
            break;
          }
          case "update": {
            console.log("update user", e);
            const user = await this.axiosAPI("PUT", e);
            const { UID } = user;
            const userIndex = this.items.findIndex(
              (user) => user["UID"] === UID
            );
            this.items.splice(userIndex, 1, user);
            this.resetUser();
            break;
          }
          case "cancel": {
            console.log("cancel");
            this.resetUser();
            break;
          }
          case "select": {
            console.log("select user", e);
            this.isCreate = false;
            this.user = Object.assign({}, e);
            break;
          }
          case "delete": {
            console.log("delete user", e);
            const { name } = e;
            const beDelete = confirm(
              `刪除 ${name} 後，將無法復原。你確定要刪除嗎？`
            );
            if (beDelete) {
              const user = await this.axiosAPI("DELETE", e);
              const { UID } = user;
              const userIndex = this.items.findIndex(
                (user) => user["UID"] === UID
              );
              if (userIndex === -1) return;
              this.items.splice(userIndex, 1);
              this.resetUser();
            }
            break;
          }
        }
      } catch (error) {
        console.error(error);
      }
    },
    resetUser() {
      this.isCreate = true;
      this.user = Object.assign({}, this.$options.data().user);
    },
    async fetchAPI(method = "GET", request = {}) {
      switch (method) {
        case "GET": {
          return await fetch(`${apiBaseURL}/user`, {
            headers,
            method,
          })
            .then((res) => res.json())
            .then((data) => {
              const { returnCode, returnMessage, data: responseData } = data;
              if (returnCode !== "0000") {
                throw returnMessage;
              }
              return responseData;
            })
            .catch((err) => {
              throw err;
            });
        }
        case "POST": {
          const { name, phone, gender, email, zip, address } = request;
          return await fetch(`${apiBaseURL}/user`, {
            headers,
            method,
            data: JSON.stringify({ name, phone, gender, email, zip, address }),
          })
            .then((res) => res.json())
            .then((data) => {
              const { returnCode, returnMessage, data: responseData } = data;
              alert(returnMessage);
              if (returnCode !== "0000") {
                throw returnMessage;
              }
              return responseData;
            })
            .catch((err) => {
              throw err;
            });
        }
        case "PUT": {
          const { UID, name, phone, gender, email, zip, address } = request;
          return await fetch(`${apiBaseURL}/user`, {
            headers,
            method,
            body: JSON.stringify({
              UID,
              name,
              phone,
              gender,
              email,
              zip,
              address,
            }),
          })
            .then((res) => res.json())
            .then((data) => {
              const { returnCode, returnMessage, data: responseData } = data;
              alert(returnMessage);
              if (returnCode !== "0000") {
                throw returnMessage;
              }
              return responseData;
            })
            .catch((err) => {
              throw err;
            });
        }
        case "DELETE": {
          const { UID } = request;
          return await fetch(
            `${apiBaseURL}/user?${new URLSearchParams({ UID })}`,
            {
              headers,
              method,
            }
          )
            .then((res) => res.json())
            .then((data) => {
              const { returnCode, returnMessage, data: responseData } = data;
              alert(returnMessage);
              if (returnCode !== "0000") {
                throw returnMessage;
              }
              return responseData;
            })
            .catch((err) => {
              throw err;
            });
        }
      }
    },
    async axiosAPI(method = "GET", request = {}) {
      switch (method) {
        case "GET": {
          const res = await axios(`${apiBaseURL}/user`, {
            headers,
            method,
          });
          const { returnCode, returnMessage, data: responseData } = res.data;
          if (returnCode !== "0000") {
            throw returnMessage;
          }
          return responseData;
        }
        case "POST": {
          const { name, phone, gender, email, zip, address } = request;
          const res = await axios(`${apiBaseURL}/user`, {
            headers,
            method,
            data: {
              name,
              phone,
              gender,
              email,
              zip,
              address,
            },
          });
          const { returnCode, returnMessage, data: responseData } = res.data;
          alert(returnMessage);
          if (returnCode !== "0000") {
            throw returnMessage;
          }
          return responseData;
        }
        case "PUT": {
          const { UID, name, phone, gender, email, zip, address } = request;
          const res = await axios(`${apiBaseURL}/user`, {
            headers,
            method,
            data: {
              UID,
              name,
              phone,
              gender,
              email,
              zip,
              address,
            },
          });
          const { returnCode, returnMessage, data: responseData } = res.data;
          alert(returnMessage);
          if (returnCode !== "0000") {
            throw returnMessage;
          }
          return responseData;
        }
        case "DELETE": {
          const { UID } = request;
          const res = await axios(`${apiBaseURL}/user`, {
            headers,
            method,
            params: { UID },
          });
          const { returnCode, returnMessage, data: responseData } = res.data;
          alert(returnMessage);
          if (returnCode !== "0000") {
            throw returnMessage;
          }
          return responseData;
        }
      }
    },
  },
};
</script>
