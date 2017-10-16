class TodosController < ApplicationController

  before_action :set_todo, 
    only: [:update, :destroy, :toggle_complete, :update_text]
  
  def index
    json_with todos = Todo.all.order(:id)
  end

  def create
    todo = Todo.new(todo_params)
    todo.save
    json_with todo
  end

  def update
    @todo.update_attributes(todo_params)
    json_with @todo
  end

  def toggle_complete
    @todo.update_attributes(completed: switch_state(@todo.completed))
    json_with @todo
  end

  def update_text
    @todo.update_attributes(text: todo_params[:text])
    json_with @todo
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
