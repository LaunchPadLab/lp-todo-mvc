class TodosController < ApplicationController

  before_action :set_todo, 
    only: [:update, :destroy, :toggle_complete, :update_text]
  
  def index
    todos = Todo.all
    respond_to do |format|
      format.json { render json: todos.to_json }
    end
  end

  def create
    todo = Todo.new(todo_params)
    if todo.save
      respond_to do |format|
        format.json { render json: todo.to_json }
      end
    else
      respond_to do |format|
        format.json { render json: { errors: todo.errors.messages } }
      end
    end
  end

  def update
    p @todo
    if @todo.update_attributes(todo_params)
      p @todo
      respond_to do |format|
        format.json { render json: @todo.to_json }
      end
    else
      respond_to do |format|
        format.json { render json: { errors: @todo.errors.messages } }
      end
    end
  end

  def toggle_complete
    if @todo.update_attributes(completed: switch_state(@todo.completed))
      puts @todo
      respond_to do |format|
        format.json { render json: @todo.to_json }
      end
    else
      respond_to do |format|
        format.json { render json: { errors: @todo.errors.messages } }
      end
    end
  end

  def update_text
    if @todo.update_attributes(text: todo_params[:text])
      respond_to do |format|
        format.json { render json: @todo.to_json }
      end
    else
      respond_to do |format|
        format.json { render json: { errors: @todo.errors.messages } }
      end
    end
  end

  def destroy
    @todo.destroy
    respond_to do |format|
      format.json { render json: @todo.to_json }
    end
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
