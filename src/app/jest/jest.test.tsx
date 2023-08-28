import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Jest from './page'

describe('<Jest/>', () => {
  it('should keep the same code', () => {
    // Um exemplo desestruturando o objeto renderizado
    // Uso do snapshot para evitar mudanças em áreas denecessárias
    const { container } = render(<Jest />)
    expect(container.innerHTML).toMatchSnapshot()
  })

  it('should render the heading, search by role', () => {
    // Buscando uma cabeçalho com um texto específico
    render(<Jest />)
    expect(
      screen.getByRole('heading', {
        name: /Exemplo com Jest e Testing Library/i
      })
    ).toBeInTheDocument()
  })

  it('should render the heading, search by text', () => {
    // Verificando se existe determinado texto na tela
    render(<Jest />)
    expect(
      screen.getByText(/exemplo com jest e testing library/i)
    ).toBeInTheDocument()
  })

  it('should have a atribute', () => {
    // Buscando uma classe dentro de uma elemento
    render(<Jest />)
    expect(
      screen.getByText(/exemplo com jest e testing library/i)
    ).toHaveAttribute('id', 'test-id')
  })

  it('should have a main role', () => {
    // Buscando um tag específica na página
    render(<Jest />)
    expect(screen.getByRole('main')).toBeValid()
  })

  it('should be able to add new item to the list', () => {
    // Um exemplo de como testar uma interatividade
    // com um componente dentro do teste
    render(<Jest />)
    // O debug precisa ser desetruturado do render
    // const { debug } = render(<Jest />)

    // Usar estes debugs para ver o código testado
    // debug()

    const addButton = screen.getByText('Adicionar item')
    fireEvent.click(addButton)

    // Usando uma segundo debug para ver como ficou após o click
    // debug()

    expect(screen.getByText('Novo item 1')).toBeInTheDocument()
  })

  it('should add a new text from the input value', async () => {
    // Caso ondem precisamos inserir uma ação assincrona de usuário
    render(<Jest />)
    const inputText = screen.getByRole('textbox')
    await Promise.all([userEvent.type(inputText, 'Novo item do input 1')])
    const addInputButton = screen.getByText('Adicionar valor do input')
    fireEvent.click(addInputButton)
    expect(screen.getByText('Novo item do input 1')).toBeInTheDocument()
  })
})
