<script setup>

</script>

<template>
  <div class="field">
    <div class="index">A</div>
    <p class="text">Gauze grievance disorder</p>
  </div>
</template>

<style scoped>
.field {
  max-width: 700px;
  width: 100%;
  padding: 25px 40px;
  display: flex;
  align-items: center;
  gap: 45px;
  background-color: var(--white);
  border-radius: 10px;
  transition: background-color 0.3s ease-in-out;
}

.field:hover {
  background-color: var(--violet-light);
  cursor: pointer;
}

.index {
  text-transform: uppercase;
  width: 50px;
  height: 50px;
  flex-shrink: 0;
  background: var(--violet-light);
  box-shadow: 5px 4px 6px rgba(0, 0, 0, 0.05);
  font-size: 32px;
  font-weight: 600;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--violet);
}

.text {
  margin: 0;
  font-size: 24px;
  font-weight: 500;
}

.field.done {
  pointer-events: none;
}

.field:hover {
  background-color: initial;
}

.field.correct {
  background: var(--blue-light);
}

.field.error {
  background: var(--red-light);
}

.field.correct .index {
  background: var(--blue);
  color: var(--white);
}

.field.correct .text {
  color: var(--violet);
}

.field.error .index {
  background: var(--red);
  color: var(--white);
}

.field.error .text {
  color: var(--white);
}

@media (max-width: 998px) {
  .field {
    padding: 20px;
    gap: 20px
  }

  .text {
    font-size: 18px;
  }
}
</style>
