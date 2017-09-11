class TodosController < ApplicationController
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
    todo = Todo.find(params[:id])
    if todo.update_attributes(todo_params)
      respond_to do |format|
        format.json { render json: todo.to_json }
      end
    else
      respond_to do |format|
        format.json { render json: { errors: todo.errors.messages } }
      end
    end
  end

  private

  def todo_params
    @todo_params ||= TodoDecanter.decant(params[:todo])
  end
end
