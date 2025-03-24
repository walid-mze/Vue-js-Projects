<template>
  <div>
    <div v-for="job in jobs" :key="job.id" class="job-card">
      <h3>{{ job.titre }}</h3>
      <div class="job-actions">
        <button class="btn btn-details" @click="goToDetails(job.id)">Details</button>
        <button class="btn btn-modify" @click="modifyJob(job.id)">Modifier</button>
        <button class="btn btn-delete" @click="deleteJob(job.id)">Supprimer</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jobs: []
    }
  },
  mounted() {
    // Récupérer les emplois depuis le localStorage
    let jobs = JSON.parse(localStorage.getItem('jobs'));

    // Si aucun emploi n'est trouvé dans le localStorage, charger les emplois depuis jobs.json
    if (!jobs || jobs.length === 0) {
      fetch('/jobs.json')
        .then(response => response.json())
        .then(data => {
          jobs = data;
          localStorage.setItem('jobs', JSON.stringify(jobs));
          this.jobs = jobs;
        })
        .catch(error => {
          console.error('Erreur lors du chargement des emplois depuis jobs.json:', error);
        });
    } else {
      this.jobs = jobs;
    }
  },
  methods: {
    goToDetails(jobId) {
      this.$router.push({ name: 'JobDetails', params: { id: jobId } });
    },
    deleteJob(jobId) {
      const confirmed = confirm('Voulez-vous vraiment supprimer cet emploi ?');
      if (confirmed) {
        this.jobs = this.jobs.filter(job => job.id !== jobId);
        // Mettre à jour le localStorage
        localStorage.setItem('jobs', JSON.stringify(this.jobs));
      }
    },
    modifyJob(jobId) {
      this.$router.push({ name: 'EditJob', params: { id: jobId } });
    }
  }
}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}

.job-card {
  background-color: #f9f9f9;
  margin: 10px 0;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.job-card h3 {
  margin: 0 0 10px;
  font-size: 1.2em;
}

.job-actions {
  display: flex;
  gap: 10px;
  justify-content: center;
}

.btn {
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btn-details {
  background-color: #007bff;
  color: white;
}

.btn-modify {
  background-color: #ffc107;
  color: white;
  text-align: center;
}

.btn-delete {
  background-color: #dc3545;
  color: white;
}
</style>