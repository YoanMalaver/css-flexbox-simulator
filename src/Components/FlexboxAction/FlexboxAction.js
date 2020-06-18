import React, { Component } from 'react';
import {
  FlexboxActionContainer,
  FlexboxActionSection,
  FlexboxActionSectionTitle,
  FlexboxActionSectionItemsContainer,
  FlexboxActionSectionItem,
  FlexboxActionSectionItemTitle,
  FlexboxActionSectionItemOptions
} from './styled';
import { RadioGroup, ReversedRadioButton } from '../RadioButton/RadioButton';
import FlexboxActionPopup from '../FlexboxActionPopup/FlexboxActionPopup';
import flexboxActionItemsData from './itemsData.json';

class FlexboxAction extends Component {

  constructor(props) {
    super(props);
    this.state = {
      'justifyContent': 'flex-start',
      'alignItems': 'stretch',
      'flexDirection': 'row',
      'flexWrap': 'nowrap',
      'alignContent': 'stretch'
    };
  }

  async onChangeOption(style, value) {
    await this.setState({
      [style]: value
    });
    this.props.updateValues(this.state);
  }

  render() {
    return (
      <FlexboxActionContainer>
        <FlexboxActionSection>
          <FlexboxActionSectionTitle>Container Properties</FlexboxActionSectionTitle>
          <FlexboxActionSectionItemsContainer>
            {flexboxActionItemsData.map((flexboxActionItemData, index) => {
              return (<FlexboxActionSectionItem key={index}>
                <FlexboxActionSectionItemTitle>
                  {flexboxActionItemData.title}: <FlexboxActionPopup title={flexboxActionItemData.title} description={flexboxActionItemData.documentation}/>
                </FlexboxActionSectionItemTitle>
                <FlexboxActionSectionItemOptions>
                <RadioGroup onChange={ (value) => this.onChangeOption(flexboxActionItemData.id, value) } value={this.state[flexboxActionItemData.id]} horizontal>
                  {flexboxActionItemData.values.map((optionValue, indexValue) => {
                    return (<ReversedRadioButton value={optionValue} key={indexValue}>
                        {optionValue}
                      </ReversedRadioButton>);
                    })}
                </RadioGroup>
                </FlexboxActionSectionItemOptions>
              </FlexboxActionSectionItem>);
            })}
          </FlexboxActionSectionItemsContainer>
        </FlexboxActionSection>
      </FlexboxActionContainer>

    );
  }
}

export default FlexboxAction;
