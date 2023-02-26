<template>
  <div class="flex h-screen items-center">
    <div class="container">
      <div class="grid grid-cols-12">
        <div
          class="col-span-full md:col-span-6 md:col-start-4 lg:col-span-4 lg:col-start-5"
        >
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
            <div class="ml-[12px] flex flex-col h-full">
              <p class="text-[18px] font-medium">王小華</p>
              <span class="text-[8px] text-gray-dark">2021070311411332</span>
              <div class="text-[10px] mt-auto">
                <span class="text-gray-dark">114</span>
                <span class="ml-[4px]">台北市內湖區環山路一段56號</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
