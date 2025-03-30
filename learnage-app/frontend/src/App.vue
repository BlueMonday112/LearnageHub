<template>
  <div id="app">
    <div class="background"></div>
    <div class="container">
      <div class="time" id="time">{{ currentTime }}</div>
      <div class="schedule">
        <div
          class="schedule-item"
          v-for="(item, index) in schedule"
          :key="index"
        >
          <span>{{ item.time }}</span> <span>{{ item.task }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      currentTime: "",
      schedule: [
        { time: "09:00", task: "プログラミング学習" },
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

<style>
body {
  margin: 0;
  padding: 0;
  background-color: #000000; /* ブラック基調 */
  color: #00ffcc; /* ネオンカラー */
  font-family: "Courier New", Courier, monospace; /* プログラミングっぽいフォント */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
}

#app {
  text-align: center;
  width: 100%;
}

.container {
  text-align: center;
  width: 80%;
}

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

.background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: radial-gradient(circle, rgba(0, 255, 204, 0.1), rgba(0, 0, 0, 1));
}
</style>
