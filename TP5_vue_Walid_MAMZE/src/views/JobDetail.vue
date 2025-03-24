<template>
  <div v-if="job" class="job-detail-container">
    <h1>{{ job.titre }}</h1>
    <p><strong>Description:</strong> {{ job.description }}</p>
    <p><strong>Salaire:</strong> {{ job.salaire }}</p>
    <p><strong>Date:</strong> {{ job.date }}</p>
  </div>
  <div v-else class="job-not-found">
    <p>Emploi non trouvé.</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      job: null
    }
  },
  mounted() {
    const jobId = this.$route.params.id;
    const jobs = JSON.parse(localStorage.getItem('jobs')) || [];
    this.job = jobs.find(job => job.id === parseInt(jobId));
  }
}
</script>

<style scoped>
.job-detail-container {
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h1 {
  font-size: 2em;
  margin-bottom: 20px;
  color: rgb(22, 27, 255);
}

p {
  margin: 10px 0;
  font-size: 1.1em;
}

p strong {
  font-weight: bold;
  color : red;
}

.job-not-found {
  font-size: 1.2em;
  color: #dc3545;
  margin-top: 20px;
}
</style>