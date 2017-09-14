class TodoDecanter < Decanter::Base
  input :text, :string
  input :completed, :boolean
end
