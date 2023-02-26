<template>
  <div class="flex h-screen items-center">
    <div class="container h-full w-[90%] py-10 lg:w-full">
      <div class="grid h-full grid-cols-12 gap-5">
        <!-- Left -->
        <div
          class="h-max-[540px] col-span-8 h-full overflow-y-auto rounded-[18px] bg-white py-6 px-5"
        >
          <div class="grid grid-cols-12 gap-4">
            <!-- 01 -->
            <div class="col-span-6">
              <!-- Card -->
              <div
                class="flex h-[110px] w-full items-center rounded-[18px] border-[1px] border-solid border-gray bg-white py-[14px] px-[10px] hover:border-white hover:shadow-md"
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
                <div class="ml-[12px] flex h-full flex-col">
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
            <div class="col-span-6">
              <!-- Card -->
              <div
                class="flex h-[110px] w-full items-center rounded-[18px] border-[1px] border-solid border-gray bg-white py-[14px] px-[10px] hover:border-white hover:shadow-md"
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
            <div class="col-span-6">
              <!-- Card -->
              <div
                class="flex h-[110px] w-full items-center rounded-[18px] border-[1px] border-solid border-gray bg-white py-[14px] px-[10px] hover:border-white hover:shadow-md"
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
          class="h-max-[540px] col-span-4 h-full overflow-y-auto rounded-[18px] bg-white py-6 px-5"
        >
        <div>
          <h2 class="font-serif text-xl font-bold">使用者資訊</h2></div>
        </div>
      </div>
    </div>
  </div>
</template>
