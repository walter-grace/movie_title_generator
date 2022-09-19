
import React, { Component } from 'react';
import { jsx,
    ThemeProvider,
    Flex,
    Box,
    Button,
    Card,
    Text,
    Label,
    Input,
    Alert,
    Divider,
    Styled as S } from 'theme-ui'
import Slider from '@mui/material/Slider';

class Body extends Component {

    state = {
        isActive:false
    }
    handleShow = () =>{
        this.setState({
            isActive: true
        })
    }

    handleHide = () => {
        this.setState({
            isActive: false
        })
    }

  constructor(props) {
    super(props);
    this.helloThere = this.helloThere.bind(this);
    this.Tweet = this.Tweet.bind(this);
  }

  helloThere() {
    alert('Please wait while text is being generated');
  }
  Tweet() {
      alert('Post this text to your tweet')
  }
    render() {
        return (
            <Flex m={30} sx={{ flexDirection: "column" }}>
            <div
              sx={{
                border: "thin",
                borderColor: "blueDark",
                borderRadius: "sketchy0",
                background: theme => theme.colors.blue,
                height: 50
              }}
            />
            <table sx={{ pt: 30, width: 200, marginX: 18 }}>
              <thead>
                <tr>
                  <th colSpan="12">writer's block be gone</th>
                </tr>
              </thead>
            </table>
            <table sx={{ pt: 20, width: 200, marginX: 25, marginY: 20 }}>
              <thead>
                <tr>
                  <th colSpan="12"> powered by a generative adversarial network</th>
                </tr>
              </thead>
            </table>
            <Divider />
            <h1>Max length</h1>
            <h3>This determines how many characters of text</h3>
            <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" min={0} 
            max={250}
            />
            <h1>Temperature</h1>
            <h3> This will set the creativity of the generation</h3>
            <Slider
                aria-label="Small steps"
                defaultValue={0.5}
                step={0.01}
                marks
                min={0.0}
                max={1}
                valueLabelDisplay="auto"
                />
            <h1>Number of text</h1>
            <h3>This will control number of prompts</h3>
            <Slider defaultValue={1} aria-label="Default" valueLabelDisplay="auto" min={0} 
            max={3}
            />
            <Divider />
            <Box
              as="form"
              pb={3}
              onSubmit={e => e.preventDefault()}
              sx={{ width: 200 }}
            >
              <Label htmlFor="username">Start off by writing a prompt, then hitting generate</Label>
              <Input name="username" mb={3} />
              <Button onClick={this.handleShow}
              sx={{
                appearance: 'none',
                display: 'inline-block',
                textAlign: 'center',
                lineHeight: 'inherit',
                textDecoration: 'none',
                fontSize: 'inherit',
                fontWeight: 'bold',
                m: 0,
                px: 3,
                py: 2,
                border: 0,
                borderRadius: 4,
                variant: 'buttons.primary',
              }}>
              Generate</Button>
            </Box>
            {this.state.isActive && <div>
                <h4>
                    Here are your prompts
                </h4>
                <Generated />
                </div>}
          </Flex>
        );
    }
}

export default Body;