function App() {
  const ideas = [
    {
      nick: 'cool-idea-nick-1',
      name: 'Idea 1',
      description: 'Description of idea 1...',
    },
    {
      nick: 'cool-idea-nick-2',
      name: 'Idea 2',
      description: 'Description of idea 2...',
    },
    {
      nick: 'cool-idea-nick-3',
      name: 'Idea 3',
      description: 'Description of ideaa 3...',
    },
    {
      nick: 'cool-idea-nick-4',
      name: 'Idea 4',
      description: 'Description of ideaa 3...',
    },
    {
      nick: 'cool-idea-nick-5',
      name: 'Idea 5',
      description: 'Description of ideaa 3...',
    },
  ]

  return (
    <div>
      <h1>Ideanick</h1>
      {ideas.map((ideas) => {
        return (
          <div key={ideas.nick}>
            <h2>{ideas.name}</h2>
            <p>{ideas.description}</p>
          </div>
        )
      })}
    </div>
  )
}

export default App
