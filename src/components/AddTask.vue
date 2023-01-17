<template>
    <form @submit="onSubmit" class="add-form" >
        <div class="form-control">
            <label>Task</label>
            <input type="text" name="text" placeholder="Add Task" v-model="text"/>
        </div>
        <div class="form-control">
            <label>Day</label>
            <input type="text" name="day" placeholder="Add Day" v-model="day"/>
        </div>
        <div class="form-control form-control-check">
            <label>Set Reminder</label>
            <input type="checkbox" name="reminder" placeholder="Add Day" v-model="reminder"/>
        </div>

        <input type="submit" value="Save Task" class="btn btn-block"/>

    </form>
</template>

<script>
    export default {
        name: 'AddTask',
        data () {
            return {
                text: "",
                day: "",
                reminder: false
            }
        },
        methods: {
            onSubmit (e) {
                e.preventDefault();
                if(!this.text) {
                    alert("Please add a task"); 
                }

                const newTask = {
                    text: this.text,
                    day: this.day,
                    reminder: this.reminder
                }

                console.log(newTask);
                this.$emit('add-task', newTask);

                this.text = "";
                this.day = "";
                this.reminder = false;
            }
        }
    }
</script>

<style scoped>

    .add-form {
        margin-bottom: 40px;
        margin-left: 35px;
    }

    .form-control {
        margin: 20px 0;
        text-align: left;
    }

    .form-control label {
        display: block;
    }

    .form-control input {
        width: 90%;
        height: 40px;
        margin: 5px;
        padding: 3px 7px;
        font-size: 17px;
    }

    .form-control-check {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .form-control-check lable {
        flex: 1;
    }

    .form-control-check input {
        flex: 2;
        height: 20px;
    }

    .btn {
        width: 95%;
        height: 40px;
        font-size: 17px;
        background: black;
        color: white;
        border-radius: 10px;
        margin-right: 20px;
    }
</style>