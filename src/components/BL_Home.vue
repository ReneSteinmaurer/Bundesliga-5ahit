<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <h2>Übersicht</h2>
    </div>

    <table class="table table-striped table-dark">
        <thead>
        <tr>
            <th scope="col">Platz</th>
            <th scope="col">Verein</th>
            <th scope="col">SP</th>
            <th scope="col">S</th>
            <th scope="col">U</th>
            <th scope="col">N</th>
            <th scope="col">GT</th>
            <th scope="col">Pkte</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
        </tr>
        <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
        </tr>
        <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
        </tr>
        </tbody>
    </table>
</template>

<script>
    export default {
        name: 'Deutsche Bundesliga',
        props: {
            msg: String,
            teams: Object
        },
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
