class TodosController < ApplicationController

  before_action :set_todo, 
    only: [:update, :destroy, :toggle_complete, :update_text]
  
  def index
    json_with todos = Todo.all
  end

  def create
    todo = Todo.new(todo_params)
    todo.save
    json_with todo
  end

  def update
    json_with @todo.update_attributes(todo_params)
  end

  def toggle_complete
    json_with @todo.update_attributes(completed: switch_state(@todo.completed))
  end

  def update_text
    json_with @todo.update_attributes(text: todo_params[:text])
  end

  def destroy
    @todo.destroy
    json_with @todo
  end

  private

  def set_todo
    @todo = Todo.find(params[:id])
  end

  def switch_state(state)
    state = !state
  end

  def todo_params
    @todo_params ||= TodoDecanter.decant(params[:todo])
  end
end
