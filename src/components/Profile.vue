<template>
    <div class="order-tracking">
      <h2>Отслеживание заказа</h2>
      <div class="timeline">
        <div
          v-for="(stage, index) in stages"
          :key="index"
          :class="['timeline-item', { active: currentStageIndex === index }]">
          {{ stage }}
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        stages: ["Заказ принят", "Пицца готовится", "Пицца упаковывается", "Курьер едет к вам", "Заказ доставлен"],
        currentStageIndex: 0,
      };
    },
    mounted() {
      this.startTracking();
    },
    methods: {
      startTracking() {
        const interval = setInterval(() => {
          if (this.currentStageIndex < this.stages.length - 1) {
            this.currentStageIndex++;
          } else {
            clearInterval(interval);
          }
        }, 3000); // Имитация изменения стадии каждые 2 секунды (для демонстрации)
      },
    },
  };
  </script>
  
  <style scoped>
  .order-tracking {
    text-align: center;
    padding: 20px;
  }
  
  .timeline {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
  }
  
  .timeline-item {
    flex: 1;
    padding: 10px;
    border: 2px solid #ccc;
    border-radius: 5px;
    font-weight: bold;
    transition: background-color 0.3s ease-in-out;
  }
  
  .timeline-item.active {
    background-color: #3fb37f; /* Цвет активной стадии */
    color: white;
  }
  </style>