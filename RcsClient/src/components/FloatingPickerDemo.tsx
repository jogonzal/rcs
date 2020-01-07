import * as React from 'react'
import {
  IPersonaProps,
  IBaseFloatingPicker,
  IBaseFloatingPickerSuggestionProps,
  FloatingPeoplePicker,
  SuggestionsStore,
  SearchBox,
  PrimaryButton,
  PersonaPresence,
  IExtendedPersonaProps,
  TextField
} from 'office-ui-fabric-react'

export type Props = {}
export type State = {
  currentSearchValue: string
  xPosition: number,
  yPosition: number,
  textContent: string,
  pickerShowing: boolean,
}

export class FloatingPickerDemo extends React.Component<Props, State> {
  private _picker = React.createRef<IBaseFloatingPicker>()
  private _inputElement = React.createRef<HTMLInputElement>()

  onFilterChanged = (filterText: string, _selectedItems?: IPersonaProps[] | undefined): IPersonaProps[] => {
    if (filterText) {
      const p = people
        .filter((item: IPersonaProps) =>
          item.text && item.text.indexOf(filterText) !== -1
        )
      return p
    }
    return people
  }

  getTextFromItem = (persona: IPersonaProps, currentValue?: string | undefined): string => {
    return persona.text || ''
  }

  onPickerChange = (item: IPersonaProps): void => {

  }

  constructor(props: Props) {
    super(props)
    this.state = {
      currentSearchValue: '',
      xPosition: 200,
      yPosition: 200,
      textContent: 'Type anything here',
      pickerShowing: false,
    }
  }

  onSearchChange = (newVal: string) => {
    if (newVal !== this.state.currentSearchValue && this._picker.current) {
      this._picker.current.onQueryStringChanged(newVal)
    }
    this.setState({
      currentSearchValue: newVal,
    })
  }

  onXChange = (_e: any, newVal?: string) => {
    const intVal = parseInt(newVal || '0')
    this.setState({
      xPosition: intVal,
    })
  }

  onYChange = (_e: any, newVal?: string) => {
    const intVal = parseInt(newVal || '0')
    this.setState({
      yPosition: intVal,
    })
  }

  onTextChanged = (_e: any, newVal?: string) => {
    const val = newVal || ''
    let searchValue: string = ''
    if (val.endsWith(' ')) {
      this.setState({
        pickerShowing: false,
      })
      this.hidePicker()
    } else if (val.endsWith('@')) {
      this.setState({
        pickerShowing: true,
      })
      this.showPicker()
    } else if (this.state.pickerShowing) {
      const indexOfAt = val.lastIndexOf('@')
      if (indexOfAt !== -1) {
        searchValue = val.substring(indexOfAt + 1, val.length)
        this.updateQueryString(searchValue)
      }
    }

    this.setState({
      textContent: val,
      currentSearchValue: searchValue,
    })
  }

  showPicker = () => {
    if (this._picker.current) {
      this._picker.current.showPicker()
      this.updateQueryString(' ')
    }
  }

  hidePicker = () => {
    if (this._picker.current) {
      this._picker.current.hidePicker()
    }
  }

  updateQueryString = (queryString: string) => {
    if (this._picker.current) {
      this._picker.current.onQueryStringChanged(queryString)
    }
  }

  onZeroQuery = () => {
    return people
  }

  render() {
    const suggestionProps: IBaseFloatingPickerSuggestionProps = {
      footerItemsProps: [
        {
          renderItem: () => {
            const picker = this._picker.current
            return (
              <div>
                Showing {picker ? picker.suggestions.length : 0} results
              </div>
            )
          },
          shouldShow: () => {
            const picker = this._picker.current
            return !!picker && picker.suggestions.length > 0
          }
        }
      ]
    }

    return (
      <>
        <TextField
          label='X position of floating picker'
          onChange={ this.onXChange }
          value={ this.state.xPosition.toString() }/>

        <TextField
          placeholder='Y position of floating picker'
          onChange={ this.onYChange }
          value={ this.state.yPosition.toString() }/>

        <div ref={this._inputElement} >
          <TextField
            label='Enter content here!'
            value={ this.state.textContent }
            onChange={ this.onTextChanged }
            multiline={ true }
            rows={ 4 } />
        </div>

        <div>
          <FloatingPeoplePicker
            suggestionsStore={new SuggestionsStore<IPersonaProps>()}
            onResolveSuggestions={this.onFilterChanged}
            getTextFromItem={this.getTextFromItem}
            pickerSuggestionsProps={ suggestionProps }
            key='normal'
            componentRef={this._picker}
            onChange={this.onPickerChange}
            resolveDelay={300}
            inputElement={ this._inputElement.current }
            onZeroQuerySuggestion={ this.onZeroQuery } />
        </div>
      </>
    )
  }
}


const baseProductionCdnUrl =
  'https://static2.sharepointonline.com/files/fabric/office-ui-fabric-react-assets/'

const TestImages = {
  choiceGroupBarUnselected:
    baseProductionCdnUrl + 'choicegroup-bar-unselected.png',
  choiceGroupBarSelected: baseProductionCdnUrl + 'choicegroup-bar-selected.png',
  choiceGroupPieUnselected:
    baseProductionCdnUrl + 'choicegroup-pie-unselected.png',
  choiceGroupPieSelected: baseProductionCdnUrl + 'choicegroup-pie-selected.png',
  documentPreview: baseProductionCdnUrl + 'document-preview.png',
  documentPreviewTwo: baseProductionCdnUrl + 'document-preview2.png',
  documentPreviewThree: baseProductionCdnUrl + 'document-preview3.png',
  iconOne: baseProductionCdnUrl + 'icon-one.png',
  iconPpt: baseProductionCdnUrl + 'icon-ppt.png',
  personaFemale: baseProductionCdnUrl + 'persona-female.png',
  personaMale: baseProductionCdnUrl + 'persona-male.png'
}

const people: (IExtendedPersonaProps & { key: string | number })[] = [
  {
    key: 1,
    imageUrl: TestImages.personaFemale,
    imageInitials: 'PV',
    text: 'Annie Lindqvist',
    secondaryText: 'Designer',
    tertiaryText: 'In a meeting',
    optionalText: 'Available at 4:00pm',
    isValid: true,
    presence: PersonaPresence.online
  },
  {
    key: 2,
    imageUrl: TestImages.personaMale,
    imageInitials: 'AR',
    text: 'Aaron Reid',
    secondaryText: 'Designer',
    tertiaryText: 'In a meeting',
    optionalText: 'Available at 4:00pm',
    isValid: true,
    presence: PersonaPresence.busy
  },
  {
    key: 3,
    imageUrl: TestImages.personaMale,
    imageInitials: 'AL',
    text: 'Alex Lundberg',
    secondaryText: 'Software Developer',
    tertiaryText: 'In a meeting',
    optionalText: 'Available at 4:00pm',
    isValid: true,
    presence: PersonaPresence.dnd
  },
  {
    key: 4,
    imageUrl: TestImages.personaMale,
    imageInitials: 'RK',
    text: 'Roko Kolar',
    secondaryText: 'Financial Analyst',
    tertiaryText: 'In a meeting',
    optionalText: 'Available at 4:00pm',
    isValid: true,
    presence: PersonaPresence.offline
  },
  {
    key: 5,
    imageUrl: TestImages.personaMale,
    imageInitials: 'CB',
    text: 'Christian Bergqvist',
    secondaryText: 'Sr. Designer',
    tertiaryText: 'In a meeting',
    optionalText: 'Available at 4:00pm',
    isValid: true,
    presence: PersonaPresence.online
  },
  {
    key: 6,
    imageUrl: TestImages.personaFemale,
    imageInitials: 'VL',
    text: 'Valentina Lovric',
    secondaryText: 'Design Developer',
    tertiaryText: 'In a meeting',
    optionalText: 'Available at 4:00pm',
    isValid: true,
    presence: PersonaPresence.online
  },
  {
    key: 7,
    imageUrl: TestImages.personaMale,
    imageInitials: 'MS',
    text: 'Maor Sharett',
    secondaryText: 'UX Designer',
    tertiaryText: 'In a meeting',
    optionalText: 'Available at 4:00pm',
    isValid: true,
    presence: PersonaPresence.away
  },
  {
    key: 8,
    imageUrl: TestImages.personaFemale,
    imageInitials: 'PV',
    text: 'Anny Lindqvist',
    secondaryText: 'Designer',
    tertiaryText: 'In a meeting',
    optionalText: 'Available at 4:00pm',
    isValid: true,
    presence: PersonaPresence.busy
  },
  {
    key: 9,
    imageUrl: TestImages.personaMale,
    imageInitials: 'AR',
    text: 'Aron Reid',
    secondaryText: 'Designer',
    tertiaryText: 'In a meeting',
    optionalText: 'Available at 4:00pm',
    isValid: true,
    presence: PersonaPresence.dnd
  },
  {
    key: 10,
    imageUrl: TestImages.personaMale,
    imageInitials: 'AL',
    text: 'Alix Lundberg',
    secondaryText: 'Software Developer',
    tertiaryText: 'In a meeting',
    optionalText: 'Available at 4:00pm',
    isValid: true,
    presence: PersonaPresence.offline
  },
  {
    key: 11,
    imageUrl: TestImages.personaMale,
    imageInitials: 'RK',
    text: 'Roko Kular',
    secondaryText: 'Financial Analyst',
    tertiaryText: 'In a meeting',
    optionalText: 'Available at 4:00pm',
    isValid: true,
    presence: PersonaPresence.none
  },
  {
    key: 12,
    imageUrl: TestImages.personaMale,
    imageInitials: 'CB',
    text: 'Christian Bergqvest',
    secondaryText: 'Sr. Designer',
    tertiaryText: 'In a meeting',
    optionalText: 'Available at 4:00pm',
    isValid: true,
    presence: PersonaPresence.busy
  },
  {
    key: 13,
    imageUrl: TestImages.personaFemale,
    imageInitials: 'VL',
    text: 'Valintina Lovric',
    secondaryText: 'Design Developer',
    tertiaryText: 'In a meeting',
    optionalText: 'Available at 4:00pm',
    isValid: true,
    presence: PersonaPresence.busy
  },
  {
    key: 14,
    imageUrl: TestImages.personaMale,
    imageInitials: 'MS',
    text: 'Maor Sharet',
    secondaryText: 'UX Designer',
    tertiaryText: 'In a meeting',
    optionalText: 'Available at 4:00pm',
    isValid: true,
    presence: PersonaPresence.blocked
  },
  {
    key: 15,
    imageUrl: TestImages.personaFemale,
    imageInitials: 'VL',
    text: 'Anny Lindqvest',
    secondaryText: 'SDE',
    tertiaryText: 'In a meeting',
    optionalText: 'Available at 4:00pm',
    isValid: true,
    presence: PersonaPresence.blocked
  },
  {
    key: 16,
    imageUrl: TestImages.personaMale,
    imageInitials: 'MS',
    text: 'Alix Lunberg',
    secondaryText: 'SE',
    tertiaryText: 'In a meeting',
    optionalText: 'Available at 4:00pm',
    isValid: true,
    presence: PersonaPresence.away
  },
  {
    key: 17,
    imageUrl: TestImages.personaFemale,
    imageInitials: 'VL',
    text: 'Annie Lindqvest',
    secondaryText: 'SDET',
    tertiaryText: 'In a meeting',
    optionalText: 'Available at 4:00pm',
    isValid: true,
    presence: PersonaPresence.online
  },
  {
    key: 18,
    imageUrl: TestImages.personaMale,
    imageInitials: 'MS',
    text: 'Alixander Lundberg',
    secondaryText: 'Senior Manager of SDET',
    tertiaryText: 'In a meeting',
    optionalText: 'Available at 4:00pm',
    isValid: true,
    presence: PersonaPresence.offline
  },
  {
    key: 19,
    imageUrl: TestImages.personaFemale,
    imageInitials: 'VL',
    text: 'Anny Lundqvist',
    secondaryText: 'Junior Manager of Software',
    tertiaryText: 'In a meeting',
    optionalText: 'Available at 4:00pm',
    isValid: true,
    presence: PersonaPresence.away
  },
  {
    key: 20,
    imageUrl: TestImages.personaMale,
    imageInitials: 'MS',
    text: 'Maor Shorett',
    secondaryText: 'UX Designer',
    tertiaryText: 'In a meeting',
    optionalText: 'Available at 4:00pm',
    isValid: true,
    presence: PersonaPresence.blocked
  },
  {
    key: 21,
    imageUrl: TestImages.personaFemale,
    imageInitials: 'VL',
    text: 'Valentina Lovrics',
    secondaryText: 'Design Developer',
    tertiaryText: 'In a meeting',
    optionalText: 'Available at 4:00pm',
    isValid: true,
    presence: PersonaPresence.online
  },
  {
    key: 22,
    imageUrl: TestImages.personaMale,
    imageInitials: 'MS',
    text: 'Maor Sharet',
    secondaryText: 'UX Designer',
    tertiaryText: 'In a meeting',
    optionalText: 'Available at 4:00pm',
    isValid: true,
    presence: PersonaPresence.online
  },
  {
    key: 23,
    imageUrl: TestImages.personaFemale,
    imageInitials: 'VL',
    text: 'Valentina Lovrecs',
    secondaryText: 'Design Developer',
    tertiaryText: 'In a meeting',
    optionalText: 'Available at 4:00pm',
    isValid: true,
    presence: PersonaPresence.blocked
  },
  {
    key: 24,
    imageUrl: TestImages.personaMale,
    imageInitials: 'MS',
    text: 'Maor Sharitt',
    secondaryText: 'UX Designer',
    tertiaryText: 'In a meeting',
    optionalText: 'Available at 4:00pm',
    isValid: true,
    presence: PersonaPresence.offline
  },
  {
    key: 25,
    imageUrl: './images/persona-male.png',
    imageInitials: 'MS',
    text: 'Maor Shariett',
    secondaryText: 'Design Developer',
    tertiaryText: 'In a meeting',
    optionalText: 'Available at 3:00pm',
    isValid: true,
    presence: PersonaPresence.online
  },
  {
    key: 26,
    imageUrl: './images/persona-female.png',
    imageInitials: 'AL',
    text: 'Alix Lundburg',
    secondaryText: 'UX Designer',
    tertiaryText: 'In a meeting',
    optionalText: 'Available at 3:00pm',
    isValid: true,
    presence: PersonaPresence.away
  },
  {
    key: 27,
    imageUrl: './images/persona-female.png',
    imageInitials: 'VL',
    text: 'Valantena Lovric',
    secondaryText: 'UX Designer',
    tertiaryText: 'In a meeting',
    optionalText: 'Available at 4:00pm',
    isValid: true,
    presence: PersonaPresence.busy
  },
  {
    key: 28,
    imageUrl: './images/persona-female.png',
    imageInitials: 'VL',
    text: 'Velatine Lourvric',
    secondaryText: 'UX Designer',
    tertiaryText: 'In a meeting',
    optionalText: 'Available at 4:00pm',
    isValid: true,
    presence: PersonaPresence.online
  },
  {
    key: 29,
    imageUrl: './images/persona-female.png',
    imageInitials: 'VL',
    text: 'Valentyna Lovrique',
    secondaryText: 'UX Designer',
    tertiaryText: 'In a meeting',
    optionalText: 'Available at 4:00pm',
    isValid: true,
    presence: PersonaPresence.busy
  },
  {
    key: 30,
    imageUrl: './images/persona-female.png',
    imageInitials: 'AL',
    text: 'Annie Lindquest',
    secondaryText: 'UX Designer',
    tertiaryText: 'In a meeting',
    optionalText: 'Available at 4:00pm',
    isValid: true,
    presence: PersonaPresence.dnd
  },
  {
    key: 31,
    imageUrl: './images/persona-female.png',
    imageInitials: 'AL',
    text: 'Anne Lindquist',
    secondaryText: 'UX Designer',
    tertiaryText: 'In a meeting',
    optionalText: 'Available at 4:00pm',
    isValid: true,
    presence: PersonaPresence.blocked
  },
  {
    key: 32,
    imageUrl: './images/persona-female.png',
    imageInitials: 'AL',
    text: 'Ann Lindqiest',
    secondaryText: 'UX Designer',
    tertiaryText: 'In a meeting',
    optionalText: 'Available at 4:00pm',
    isValid: true,
    presence: PersonaPresence.online
  },
  {
    key: 33,
    imageUrl: './images/persona-male.png',
    imageInitials: 'AR',
    text: 'Aron Reid',
    secondaryText: 'UX Designer',
    tertiaryText: 'In a meeting',
    optionalText: 'Available at 4:00pm',
    isValid: true,
    presence: PersonaPresence.away
  },
  {
    key: 34,
    imageUrl: './images/persona-male.png',
    imageInitials: 'AR',
    text: 'Aaron Reed',
    secondaryText: 'UX Designer',
    tertiaryText: 'In a meeting',
    optionalText: 'Available at 4:00pm',
    isValid: true,
    presence: PersonaPresence.offline
  },
  {
    key: 35,
    imageUrl: './images/persona-female.png',
    imageInitials: 'AL',
    text: 'Alix Lindberg',
    secondaryText: 'UX Designer',
    tertiaryText: 'In a meeting',
    optionalText: 'Available at 4:00pm',
    isValid: true,
    presence: PersonaPresence.busy
  },
  {
    key: 36,
    imageUrl: './images/persona-male.png',
    imageInitials: 'AL',
    text: 'Alan Lindberg',
    secondaryText: 'UX Designer',
    tertiaryText: 'In a meeting',
    optionalText: 'Available at 4:00pm',
    isValid: true,
    presence: PersonaPresence.busy
  },
  {
    key: 37,
    imageUrl: './images/persona-male.png',
    imageInitials: 'MS',
    text: 'Maor Sharit',
    secondaryText: 'UX Designer',
    tertiaryText: 'In a meeting',
    optionalText: 'Available at 4:00pm',
    isValid: true,
    presence: PersonaPresence.offline
  },
  {
    key: 38,
    imageUrl: './images/persona-male.png',
    imageInitials: 'MS',
    text: 'Maorr Sherit',
    secondaryText: 'UX Designer',
    tertiaryText: 'In a meeting',
    optionalText: 'Available at 4:00pm',
    isValid: true,
    presence: PersonaPresence.online
  },
  {
    key: 39,
    imageUrl: './images/persona-male.png',
    imageInitials: 'AL',
    text: 'Alex Lindbirg',
    secondaryText: 'Software Developer',
    tertiaryText: 'In a meeting',
    optionalText: 'Available at 4:00pm',
    isValid: true,
    presence: PersonaPresence.dnd
  },
  {
    key: 40,
    imageUrl: './images/persona-male.png',
    imageInitials: 'AL',
    text: 'Alex Lindbarg',
    secondaryText: 'Software Developer',
    tertiaryText: 'In a meeting',
    optionalText: 'Available at 4:00pm',
    isValid: true,
    presence: PersonaPresence.online
  },
  {
    key: 41,
    imageInitials: 'GO',
    text: 'Group One',
    canExpand: true,
    isValid: true
  },
  {
    key: 42,
    imageInitials: 'GT',
    text: 'Group Two',
    canExpand: true,
    isValid: true
  }
]
