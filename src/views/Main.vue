<template>
  <div class="">
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
            <div class="col-span-full lg:col-span-6">
              <!-- Card -->
              <div
                class="flex h-[110px] w-full cursor-pointer items-center rounded-[18px] border-[1px] border-solid border-gray bg-white py-[14px] px-[10px] hover:border-white hover:shadow-md"
              >
                <!-- Avatar（區塊 1）-->
                <div
                  class="flex h-[80px] w-[80px] items-center justify-center rounded-[8px] bg-gray"
                >
                  <span
                    class="mdi mdi-face-man-profile text-[40px] text-secondary"
                  ></span>
                </div>
                <!-- Info（區塊 2）-->
                <div class="ml-[12px] flex flex-col">
                  <p class="text-[18px] font-medium">王小明</p>
                  <span class="text-[8px] text-gray-dark"
                    >2021070311411332</span
                  >
                  <div class="mt-auto text-[10px]">
                    <span class="text-gray-dark">114</span>
                    <span class="ml-[4px]">台北市內湖區環山路一段56號</span>
                  </div>
                </div>
              </div>
            </div>
            <!-- 02 -->
            <div class="col-span-full lg:col-span-6">
              <!-- Card -->
              <div
                class="flex h-[110px] w-full cursor-pointer items-center rounded-[18px] border-[1px] border-solid border-gray bg-white py-[14px] px-[10px] hover:border-white hover:shadow-md"
              >
                <!-- Avatar（區塊 1）-->
                <div
                  class="flex h-[80px] w-[80px] items-center justify-center rounded-[8px] bg-gray"
                >
                  <span
                    class="mdi mdi-face-woman-profile text-[40px] text-secondary"
                  ></span>
                </div>
                <!-- Info（區塊 2）-->
                <div class="ml-[12px] flex h-full flex-col">
                  <p class="text-[18px] font-medium">王小華</p>
                  <span class="text-[8px] text-gray-dark"
                    >2021070311411332</span
                  >
                  <div class="mt-auto text-[10px]">
                    <span class="text-gray-dark">114</span>
                    <span class="ml-[4px]">台北市內湖區環山路一段56號</span>
                  </div>
                </div>
              </div>
            </div>
            <!-- 03 -->
            <div class="col-span-full lg:col-span-6">
              <!-- Card -->
              <div
                class="flex h-[110px] w-full cursor-pointer items-center rounded-[18px] border-[1px] border-solid border-gray bg-white py-[14px] px-[10px] hover:border-white hover:shadow-md"
              >
                <!-- Avatar（區塊 1）-->
                <div
                  class="flex h-[80px] w-[80px] items-center justify-center rounded-[8px] bg-gray"
                >
                  <span class="mdi mdi-ninja text-[40px] text-secondary"></span>
                </div>
                <!-- Info（區塊 2）-->
                <div class="ml-[12px] flex h-full flex-col">
                  <p class="text-[18px] font-medium">陳小龍</p>
                  <span class="text-[8px] text-gray-dark"
                    >2021070311411332</span
                  >
                  <div class="mt-auto text-[10px]">
                    <span class="text-gray-dark">114</span>
                    <span class="ml-[4px]">台北市內湖區環山路一段56號</span>
                  </div>
                </div>
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
              class="w-full rounded-lg bg-gray-light py-4 px-3 outline-gray-dark"
              type="text"
              placeholder="姓名"
            />
            <!-- 性別 -->
            <ul class="grid grid-cols-3 gap-x-3">
              <!-- man -->
              <li>
                <input
                  class="peer hidden"
                  type="radio"
                  name="type"
                  id="man"
                  checked
                />
                <label
                  for="man"
                  class="flex w-full cursor-pointer flex-col items-center justify-center rounded-lg border-[1px] border-transparent bg-gray-light py-2 text-secondary hover:bg-gray hover:text-primary peer-checked:border-gray-dark peer-checked:text-primary"
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
                  class="peer hidden"
                  type="radio"
                  name="type"
                  id="woman"
                />
                <label
                  for="woman"
                  class="flex w-full cursor-pointer flex-col items-center justify-center rounded-lg border-[1px] border-transparent bg-gray-light py-2 text-secondary hover:bg-gray hover:text-primary peer-checked:border-gray-dark peer-checked:text-primary"
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
                  class="peer hidden"
                  type="radio"
                  name="type"
                  id="unknow"
                />
                <label
                  for="unknow"
                  class="flex w-full cursor-pointer flex-col items-center justify-center rounded-lg border-[1px] border-transparent bg-gray-light py-2 text-secondary hover:bg-gray hover:text-primary peer-checked:border-gray-dark peer-checked:text-primary"
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
              class="w-full rounded-lg bg-gray-light py-4 px-3 outline-gray-dark"
              type="email"
              placeholder="電子郵件"
            />
            <!-- 聯絡電話 -->
            <input
              class="w-full rounded-lg bg-gray-light py-4 px-3 outline-gray-dark"
              type="tel"
              placeholder="聯絡電話"
            />
            <!-- 聯絡地址 -->
            <div class="flex gap-x-2">
              <!-- 郵遞區號 -->
              <input
                class="w-[30%] rounded-lg bg-gray-light py-4 px-3 outline-gray-dark"
                type="number"
                placeholder="郵遞區號"
              />
              <!-- 地址 -->
              <input
                class="w-[70%] rounded-lg bg-gray-light py-4 px-3 outline-gray-dark"
                type="text"
                placeholder="地址"
              />
            </div>
            <!-- 動作 -->
            <div class="mt-auto">
              <!-- 新增 -->
              <div v-if="true">
                <button
                  class="w-full rounded-lg bg-primary py-4 text-[14px] text-white"
                >
                  新增
                </button>
              </div>
              <!-- 取消/儲存 -->
              <div v-else class="flex gap-x-3">
                <!-- 取消 -->
                <button
                  class="w-full rounded-lg border-[1px] border-primary py-4 text-[14px] text-primary"
                >
                  取消
                </button>
                <!-- 儲存 -->
                <button
                  class="w-full rounded-lg bg-primary py-4 text-[14px] text-white"
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
