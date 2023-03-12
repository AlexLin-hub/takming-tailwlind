<template>
  <div
    class="group relative flex h-[110px] w-full cursor-pointer items-center rounded-[18px] border-[1px] border-solid border-gray bg-white py-[14px] px-[10px] hover:border-white hover:shadow-md"
    @click="$emit('select', user)"
  >
    <!-- Avatar（區塊 1）-->
    <div
      class="flex h-[80px] w-[80px] items-center justify-center rounded-[8px] bg-gray"
    >
      <span
        class="mdi text-[40px] text-secondary"
        :class="[handleIcon(user.gender)]"
      ></span>
    </div>
    <!-- Info（區塊 2）-->
    <div class="ml-[12px] flex h-full flex-col">
      <p class="text-[18px] font-medium">{{ user.name }}</p>
      <span class="text-[8px] text-gray-dark">{{ user.UID }}</span>
      <div class="mt-auto text-[10px]">
        <span class="text-gray-dark">{{ user.zip }}</span>
        <span class="ml-[4px]">{{ user.address }}</span>
      </div>
    </div>
    <!-- 刪除按鈕 -->
    <button
      class="absolute top-3 right-3 hidden text-lg hover:text-secondary group-hover:block"
      @click.stop="$emit('delete', user)"
    >
      <span class="mdi mdi-trash-can"></span>
    </button>
  </div>
</template>
<script>
export default {
  props: {
    user: { type: Object, default: () => {} },
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
