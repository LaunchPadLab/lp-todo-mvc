class CustomDateParser < Decanter::Parser::ValueParser
  parser do |value, options|
    Date.strptime(value, '%m/%d/%Y')
  end
end
