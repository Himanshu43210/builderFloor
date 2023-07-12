import React from "react"
import {
  useTheme,
  useMediaQuery,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Drawer,
  IconButton,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip,
  Box,
  Slider,
} from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import MenuIcon from "@mui/icons-material/Menu"

const FilterPanel = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))

  const [open, setOpen] = React.useState(false)
  const [propertyType, setPropertyType] = React.useState("")
  const [budget, setBudget] = React.useState([0,0])
  const [bedrooms, setBedrooms] = React.useState([])

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  const handleChange = (event) => {
    const name = event.target.name
    if (name === "propertyType") setPropertyType(event.target.value)
    if (name === "bedrooms") setBedrooms(event.target.value)
  }

  const handleBudgetChange = (event, newValue) => {
    setBudget(newValue);
  };

  const clearFilter = (filter,c) => {
    if (filter === "propertyType") setPropertyType("")
    if (filter === "budget") setBudget([0, 0])
    if (filter === "bedrooms") setBedrooms(prev => prev.filter(t=> t!==c))
  }

  const filterContent = (
    <div>
      {/* Selected filters */}
      <Box display="flex" flexWrap="wrap" mb={2}>
        {propertyType && <Chip label={propertyType} onDelete={() => clearFilter("propertyType")} color="primary" m={1} />}
        {budget && budget.map(b=> b!==0 && <Chip label={"price : "+ b} onDelete={() => clearFilter("budget")} color="primary" m={1} />)}
        {bedrooms && bedrooms.map(c=><Chip label={c} onDelete={() => clearFilter("bedrooms",c)} color="primary" m={1} />)}
      </Box>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content">
          <Typography>Property Type</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormControl fullWidth>
            <InputLabel id="property-type-label">Type</InputLabel>
            <Select labelId="property-type-label" id="property-type" value={propertyType} onChange={handleChange} label="Type" name="propertyType">
              <MenuItem value={"Residential"}>Residential</MenuItem>
              <MenuItem value={"Commercial"}>Commercial</MenuItem>
            </Select>
          </FormControl>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content">
          <Typography>Budget</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography gutterBottom>Budget (in Cr)</Typography>
          <Slider value={budget} onChange={handleBudgetChange} valueLabelDisplay="auto" min={1} max={100} />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3a-content">
          <Typography>Bedrooms</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormControl fullWidth>
            <InputLabel id="bedrooms-label">Bedrooms</InputLabel>
            <Select labelId="bedrooms-label" id="bedrooms" multiple value={bedrooms} onChange={handleChange} label="Bedrooms" name="bedrooms">
              <MenuItem value={"1 BHK"}>1 BHK</MenuItem>
              <MenuItem value={"2 BHK"}>2 BHK</MenuItem>
              <MenuItem value={"3 BHK"}>3 BHK</MenuItem>
              <MenuItem value={"4 BHK"}>4 BHK</MenuItem>
              <MenuItem value={"5 BHK"}>5 BHK</MenuItem>
            </Select>
          </FormControl>
        </AccordionDetails>
      </Accordion>
    </div>
  )

  return (
    <div>
      {isMobile ? (
        <div>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerOpen}>
            <MenuIcon />
          </IconButton>
          <Drawer anchor="left" open={open} onClose={handleDrawerClose}>
            {filterContent}
          </Drawer>
        </div>
      ) : (
        <div>{filterContent}</div>
      )}
    </div>
  )
}

export default FilterPanel
