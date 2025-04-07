<template>
  <div>
    <div class="time" id="time">{{ currentTime }}</div>
    <div class="schedule">
      <div class="schedule-item" v-for="(item, index) in schedule" :key="index">
        <span>{{ item.time }}</span> <span>{{ item.task }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignageDisplay",
  data() {
    return {
      currentTime: "",
      schedule: [
        { time: "09:00", task: "プログラミング" },
        { time: "12:00", task: "ランチタイム" },
        { time: "14:00", task: "アルゴリズム演習" },
        { time: "18:00", task: "復習とまとめ" },
      ],
    };
  },
  methods: {
    updateTime() {
      const now = new Date();
      this.currentTime = now.toLocaleTimeString("ja-JP", { hour12: false });
    },
  },
  mounted() {
    this.updateTime();
    setInterval(this.updateTime, 1000);
  },
};
</script>

<style scoped>
.time {
  font-size: 4rem;
  margin-bottom: 20px;
  color: #00ffcc;
  text-shadow: 0 0 10px #00ffcc, 0 0 20px #00ffcc;
}

.schedule {
  font-size: 1.5rem;
  line-height: 2;
  color: #ffffff;
}

.schedule-item {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #444;
  padding: 10px 0;
}

.schedule-item span {
  color: #00ffcc;
}
</style>
