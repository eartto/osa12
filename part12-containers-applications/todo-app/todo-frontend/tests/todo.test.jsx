import { expect, test } from "vitest"

test('todo content is correct', () => {

    const TodoView = () => {
        const [todos, setTodos] = useState([])

        const refreshTodos = async () => {
            const { data } = await axios.get('/todos')
            setTodos(data)
        }

        useEffect(() => {
            refreshTodos()
        }, [])

        expect(todos[2].text).toBe("What containers 103")

    }

})