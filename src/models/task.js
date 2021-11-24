const mongoose = require("mongoose");
const validator = require("validator");

const taskSchema = mongoose.Schema(
  {
    class: {
      type: String,
      required: true,
      trim: true,
    },
    section: {
      type: String,
      required: true,
      trim: true,
    },
    level: {
      type: String,
      required: true,
      trim: true,
    },
    mission: {
      type: String,
      required: true,
      trim: true,
    },
    phase: {
      type: String,
      required: true,
      trim: true,
    },
    scenario: {
      type: String,
      required: true,
      trim: true,
    },
    scenario_title: {
      type: String,
      required: true,
      trim: true,
    },
    scenario_level: {
      type: String,
      required: true,
      trim: true,
    },
    right_answers: {
      type: Number,
      default: 0,
    },
    cont_wrong: {
      type: Number,
      default: 0,
    },
    cont_right: {
      type: Number,
      default: 0,
    },
    total_answers: {
      type: Number,
      default: 0,
    },
    start_date: {
      type: Date,
      default: Date.parse("January 1, 1900"),
    },
    end_date: {
      type: Date,
      default: Date.parse("January 1, 1900"),
    },
    completed: {
      type: Boolean,
      default: false,
    },
    predecessor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Task",
    },
    successor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Task",
      },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

taskSchema.virtual('predecessor_id', {
    ref: 'Task',
    localField: '_id',
    foreignField: 'predecessor'
})

taskSchema.virtual('successor_id', {
    ref: 'Task',
    localField: '_id',
    foreignField: 'successor'
})

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;