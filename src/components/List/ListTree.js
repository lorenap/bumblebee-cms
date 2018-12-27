import React from 'react'
import { Accordion } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'


const level1Panels = [
  { key: 'panel-1a', title: 'Level 1A', content: {content: <Button>Click Here</Button>} },
  { key: 'panel-ba', title: 'Level 1B', content: 'Level 1B Contents' },
]

const Level1Content = (
  <div>
    <Accordion.Accordion panels={level1Panels} />
  </div>
)

const level2Panels = [
  { key: 'panel-2a', title: 'Level 2A', content: 'Level 2A Contents' },
  { key: 'panel-2b', title: 'Level 2B', content: 'Level 2B Contents' },
]

const Level2Content = (
  <div>
    <Accordion.Accordion panels={level2Panels} />
  </div>
)

const rootPanels = [
  { key: 'Header', title: 'Header', content: { content: Level1Content } },
  { key: 'Content', title: 'Content', content: { content: Level2Content } },
  { key: 'Footer', title: 'Footer', content: { content: Level2Content } },
]

class ListTree extends React.Component {

  render() {
    const { rootPanel, levelPanel } = this.props;
    return (
      <Accordion defaultActiveIndex={0} panels={rootPanels} styled />
    );
  }



}


export default ListTree;