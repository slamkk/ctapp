<template>
  <div>
    <h2>电流互感器参数输入</h2>
    <form @submit.prevent="calculate">
      <div>
        <label>一次电流（A）</label>
        <input type="number" v-model="primaryCurrent" />
      </div>
      <div>
        <label>二次电流（A）</label>
        <input type="number" v-model="secondaryCurrent" />
      </div>
      <div>
        <label>一次匝数</label>
        <input type="number" v-model="primaryTurns" />
      </div>
      <div>
        <label>二次匝数</label>
        <input type="number" v-model="secondaryTurns" />
      </div>
      <div>
        <button type="submit">计算</button>
      </div>
    </form>
    <h2>计算结果</h2>
    <p>{{ result }}</p>
  </div>
</template>
<script>
import { reactive, computed } from "vue";
export default {
  setup() {
    const state = reactive({
      primaryCurrent: 0,
      secondaryCurrent: 0,
      primaryTurns: 0,
      secondaryTurns: 0,
    });
    const result = computed(() => {
      const ratio = state.primaryTurns / state.secondaryTurns;
      const secondaryCurrent = state.primaryCurrent / ratio;
      return `一次电流：${
        state.primaryCurrent
      }A，二次电流：${secondaryCurrent.toFixed(2)}A`;
    });
    function calculate() {
      console.log("计算结果：", result.value);
    }
    return {
      state,
      result,
      calculate,
    };
  },
};
</script>
