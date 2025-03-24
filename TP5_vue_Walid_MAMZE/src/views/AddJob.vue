<template>
  <div class="add-job-container">
    <h1>Ajouter un nouvel emploi</h1>
    <form @submit.prevent="add">
      <div class="form-group">
        <label for="titre">Titre</label>
        <input type="text" id="titre" v-model="titre" class="form-control">
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <textarea v-model="description" id="description" cols="30" rows="10" class="form-control"></textarea>
      </div>
      <div class="form-group">
        <label for="salaire">Salaire</label>
        <input type="text" id="salaire" v-model="salaire" class="form-control">
      </div>
      <div class="form-group">
        <label for="date">Date</label>
        <input v-model="date" type="date" name="date" id="date" class="form-control">
      </div>
      <button type="submit" class="btn btn-primary">Ajouter l'emploi</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      titre: '',
      description: '',
      salaire: '',
      date: ''
    }
  },
  methods: {
    add() {
      const newJob = {
        id: Date.now(), // Utilisez un ID unique basé sur le timestamp
        titre: this.titre,
        description: this.description,
        salaire: this.salaire,
        date: this.date
      };

      // Récupérer les emplois existants depuis le localStorage
      let jobs = JSON.parse(localStorage.getItem('jobs')) || [];

      // Ajouter le nouvel emploi
      jobs.push(newJob);

      // Enregistrer les emplois mis à jour dans le localStorage
      localStorage.setItem('jobs', JSON.stringify(jobs));

      // Réinitialiser les champs du formulaire
      this.titre = '';
      this.description = '';
      this.salaire = '';
      this.date = '';

      // Rediriger vers la page d'accueil
      this.$router.push('/');
    }
  }
}
</script>

<style scoped>
.add-job-container {
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
  border-color: #007bff;
  outline: none;
}

.btn {
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1em;
}

.btn:hover {
  background-color: #0056b3;
}
</style>