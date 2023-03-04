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
              <div
                class="group relative flex h-[110px] w-full cursor-pointer items-center rounded-[18px] border-[1px] border-solid border-gray bg-white py-[14px] px-[10px] hover:border-white hover:shadow-md"
              >
                <!-- Avatar（區塊 1）-->
                <div
                  class="flex h-[80px] w-[80px] items-center justify-center rounded-[8px] bg-gray"
                >
                  <span
                    class="mdi text-[40px] text-secondary"
                    :class="[handleIcon(item.gender)]"
                  ></span>
                </div>
                <!-- Info（區塊 2）-->
                <div class="ml-[12px] flex h-full flex-col">
                  <p class="text-[18px] font-medium">{{ item.name }}</p>
                  <span class="text-[8px] text-gray-dark">{{ item.UID }}</span>
                  <div class="mt-auto text-[10px]">
                    <span class="text-gray-dark">{{ item.zip }}</span>
                    <span class="ml-[4px]">{{ item.address }}</span>
                  </div>
                </div>
                <!-- 刪除按鈕 -->
                <button
                  class="absolute top-3 right-3 hidden text-lg hover:text-secondary group-hover:block"
                >
                  <span class="mdi mdi-trash-can"></span>
                </button>
              </div>
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
                v-model="user.zip"
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
                >
                  新增
                </button>
              </div>
              <!-- 取消/儲存 -->
              <div v-else class="flex gap-x-3">
                <!-- 取消 -->
                <button
                  class="w-full rounded-lg border-[1px] border-primary py-4 text-[14px] text-primary disabled:cursor-not-allowed disabled:border-gray disabled:text-gray-dark"
                >
                  取消
                </button>
                <!-- 儲存 -->
                <button
                  class="w-full rounded-lg bg-primary py-4 text-[14px] text-white disabled:cursor-not-allowed disabled:bg-gray disabled:text-gray-dark"
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
export default {
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
      items: [
        {
          UID: "2021062012003739",
          SID: "ROOT",
          CID: "",
          name: "Am",
          phone: "0987654334",
          gender: "M",
          email: "Takming014@takming.edu.tw",
          zip: 300,
          address: "新竹縣湖口鄉德和路228號",
          createTime: "2021-06-20 12:00:37",
          updateTime: "2021-06-20 12:00:37",
          isDelete: null,
        },
        {
          UID: "2021062012000719",
          SID: "ROOT",
          CID: "",
          name: "Snap",
          phone: "0987654333",
          gender: "O",
          email: "Takming013@takming.edu.tw",
          zip: 360,
          address: "苗栗縣造橋鄉平仁路74巷2號5樓",
          createTime: "2021-06-20 12:00:07",
          updateTime: "2021-06-20 12:00:07",
          isDelete: null,
        },
        {
          UID: "2021062011595088",
          SID: "ROOT",
          CID: "",
          name: "Oreo",
          phone: "0987654332",
          gender: "O",
          email: "Takming012@takming.edu.tw",
          zip: 360,
          address: "苗栗縣後龍鎮中心路82巷3號",
          createTime: "2021-06-20 11:59:50",
          updateTime: "2021-06-20 11:59:50",
          isDelete: null,
        },
        {
          UID: "2021062011592075",
          SID: "ROOT",
          CID: "",
          name: "John",
          phone: "0987654331",
          gender: "W",
          email: "Takming011@takming.edu.tw",
          zip: 400,
          address: "台中市西屯區朝富路140巷1號",
          createTime: "2021-06-20 11:59:20",
          updateTime: "2021-06-20 11:59:20",
          isDelete: null,
        },
        {
          UID: "2021062011581348",
          SID: "ROOT",
          CID: "",
          name: "Eric",
          phone: "0987654330",
          gender: "M",
          email: "Takming010@takming.edu.tw",
          zip: 222,
          address: "新北市新店區僑信路200號",
          createTime: "2021-06-20 11:58:13",
          updateTime: "2021-06-20 11:58:13",
          isDelete: null,
        },
        {
          UID: "2021062011574160",
          SID: "ROOT",
          CID: "",
          name: "Gimmy",
          phone: "0987654329",
          gender: "W",
          email: "Takming009@takming.edu.tw",
          zip: 222,
          address: "新北市新莊區幸福路134巷19號",
          createTime: "2021-06-20 11:57:41",
          updateTime: "2021-06-20 11:57:41",
          isDelete: null,
        },
        {
          UID: "2021062011571357",
          SID: "ROOT",
          CID: "",
          name: "Fraudeau",
          phone: "0987654328",
          gender: "W",
          email: "Takming008@takming.edu.tw",
          zip: 400,
          address: "台中市神岡區昌平路五段72巷26號2樓",
          createTime: "2021-06-20 11:57:13",
          updateTime: "2021-06-20 11:57:13",
          isDelete: null,
        },
        {
          UID: "2021062011555641",
          SID: "ROOT",
          CID: "",
          name: "Gino",
          phone: "0987654327",
          gender: "M",
          email: "Takming007@takming.edu.tw",
          zip: 222,
          address: "新北市三重區進安街143巷11號4樓",
          createTime: "2021-06-20 11:55:56",
          updateTime: "2021-06-20 11:56:14",
          isDelete: null,
        },
        {
          UID: "2021062011553355",
          SID: "ROOT",
          CID: "",
          name: "Hoolkca",
          phone: "0987654326",
          gender: "W",
          email: "Takming006@takming.edu.tw",
          zip: 700,
          address: "台南市北區公園北路167巷5號",
          createTime: "2021-06-20 11:55:33",
          updateTime: "2021-06-20 11:55:33",
          isDelete: null,
        },
        {
          UID: "2021062011545961",
          SID: "ROOT",
          CID: "",
          name: "Eric",
          phone: "0987654325",
          gender: "M",
          email: "Takming005@takming.edu.tw",
          zip: 540,
          address: "南投縣埔里鎮八德路21巷19號4樓",
          createTime: "2021-06-20 11:54:59",
          updateTime: "2021-06-20 11:54:59",
          isDelete: null,
        },
        {
          UID: "2021062011535584",
          SID: "ROOT",
          CID: "",
          name: "麥克華斯基",
          phone: "0987654324",
          gender: "M",
          email: "Takming004@takming.edu.tw",
          zip: 802,
          address: "高雄市苓雅區四維三路2號",
          createTime: "2021-06-20 11:53:55",
          updateTime: "2021-06-20 11:53:55",
          isDelete: null,
        },
        {
          UID: "2021062011513840",
          SID: "ROOT",
          CID: "",
          name: "史瑞克",
          phone: "0987654323",
          gender: "O",
          email: "Takming003@takming.edu.tw",
          zip: 104,
          address: "台北市中山區民權東路二段109號",
          createTime: "2021-06-20 11:51:38",
          updateTime: "2021-06-20 11:51:38",
          isDelete: null,
        },
        {
          UID: "2021062011493428",
          SID: "ROOT",
          CID: "",
          name: "陳小華",
          phone: "0987654322",
          gender: "M",
          email: "Takming002@takming.edu.tw",
          zip: 114,
          address: "台北市內湖區內湖路一段285巷68弄7號",
          createTime: "2021-06-20 11:49:34",
          updateTime: "2021-06-20 11:50:40",
          isDelete: null,
        },
        {
          UID: "2021062011491777",
          SID: "ROOT",
          CID: "",
          name: "王小明",
          phone: "0987654321",
          gender: "M",
          email: "Takming001@takming.edu.tw",
          zip: 114,
          address: "台北市內湖區環山路一段56號",
          createTime: "2021-06-20 11:49:17",
          updateTime: "2021-06-20 11:49:17",
          isDelete: null,
        },
      ],
      isCreate: true,
    };
  },
  methods: {
    handleIcon(gender) {
      switch (gender) {
        case "M": {
          return "mdi-face-man-profile";
        }
        case "W": {
          return "mdi-face-woman-profile";
        }
        default: {
          return "mdi-ninja";
        }
      }
    },
  },
};
</script>
