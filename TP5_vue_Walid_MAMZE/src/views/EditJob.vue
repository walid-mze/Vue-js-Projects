<template>
  <div class="edit-job-container">
    <h1>Modifier l'emploi</h1>
    <form @submit.prevent="updateJob">
      <div class="form-group">
        <label for="titre">Titre</label>
        <input type="text" id="titre" v-model="titre" class="form-control" />
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <textarea v-model="description" id="description" cols="30" rows="10" class="form-control"></textarea>
      </div>
      <div class="form-group">
        <label for="salaire">Salaire</label>
        <input type="text" id="salaire" v-model="salaire" class="form-control" />
      </div>
      <div class="form-group">
        <label for="date">Date</label>
        <input type="date" id="date" v-model="date" class="form-control" />
      </div>
      <button type="submit" class="btn btn-success">Mettre à jour</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: null,
      titre: '',
      description: '',
      salaire: '',
      date: ''
    };
  },
  created() {
    const jobId = this.$route.params.id; // Get job ID from URL
    let jobs = JSON.parse(localStorage.getItem('jobs')) || [];
    let jobToEdit = jobs.find(job => job.id == jobId);

    if (jobToEdit) {
      this.id = jobToEdit.id;
      this.titre = jobToEdit.titre;
      this.description = jobToEdit.description;
      this.salaire = jobToEdit.salaire;
      this.date = jobToEdit.date;
    }
  },
  methods: {
    updateJob() {
      let jobs = JSON.parse(localStorage.getItem('jobs')) || [];
      let index = jobs.findIndex(job => job.id == this.id);

      if (index !== -1) {
        // Update the job in the array
        jobs[index] = {
          id: this.id,
          titre: this.titre,
          description: this.description,
          salaire: this.salaire,
          date: this.date
        };

        // Save updated jobs list
        localStorage.setItem('jobs', JSON.stringify(jobs));

        // Redirect to home page
        this.$router.push('/');
      }
    }
  }
};
</script>

<style scoped>
.edit-job-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  margin-bottom: 20px;
  font-size: 1.8em;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.form-control {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

.form-control:focus {
  border-color: #28a745;
  outline: none;
}

.btn {
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1em;
}

.btn:hover {
  background-color: #218838;
}
</style>
