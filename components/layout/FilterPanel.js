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
  RadioGroup,
  FormControlLabel,
  Radio,
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
  const [constructionStatus, setConstructionStatus] = React.useState("")
  const [postedBy, setPostedBy] = React.useState([])
  const [area, setArea] = React.useState([0, 0])

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
    if (name === "postedBy") setPostedBy(event.target.value)
  }

  const handleBudgetChange = (event, newValue) => {
    setBudget(newValue);
  };

  const handleAreaChange = (event, newValue) => {
    setArea(newValue);
  };

  const handleStatusChange = (event) => {
    setConstructionStatus(event.target.value);
  };

  const clearFilter = (filter,c) => {
    if (filter === "propertyType") setPropertyType("")
    if (filter === "budget") setBudget([0, 0])
    if (filter === "bedrooms") setBedrooms(prev => prev.filter(t=> t!==c))
    if (filter === "constructionStatus") setConstructionStatus("")
    if (filter === "postedBy") setPostedBy(prev => prev.filter(t=> t!==c))
    if (filter === "area") setArea([0, 0])
  }

  const filterContent = (
    <div>
      {/* Selected filters */}
      <Box display="flex" flexWrap="wrap" mb={2}>
        {propertyType && <Chip label={propertyType} onDelete={() => clearFilter("propertyType")} color="primary" m={1} />}
        {budget && budget.map(b=> b!==0 && <Chip label={"price : "+ b} onDelete={() => clearFilter("budget")} color="primary" m={1} />)}
        {bedrooms && bedrooms.map(c=><Chip label={c} onDelete={() => clearFilter("bedrooms",c)} color="primary" m={1} />)}
        {constructionStatus && <Chip label={constructionStatus} onDelete={() => clearFilter("constructionStatus")} color="primary" m={1} />}
        {postedBy && postedBy.map(c=><Chip label={c} onDelete={() => clearFilter("postedBy",c)} color="primary" m={1} />)}
        {area && area.map(a=> a!==0 && <Chip label={"Area : "+ a} onDelete={() => clearFilter("area")} color="primary" m={1} />)}
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

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel4a-content">
          <Typography>Construction Status</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormControl component="fieldset">
            <RadioGroup aria-label="construction-status" name="constructionStatus" value={constructionStatus} onChange={handleStatusChange}>
              <FormControlLabel value="Ready" control={<Radio />} label="Ready" />
              <FormControlLabel value="Under Construction" control={<Radio />} label="Under Construction" />
            </RadioGroup>
          </FormControl>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel5a-content">
          <Typography>Posted By</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormControl fullWidth>
            <InputLabel id="postedBy-label">Posted By</InputLabel>
            <Select labelId="postedBy-label" id="postedBy" multiple value={postedBy} onChange={handleChange} label="Posted By" name="postedBy">
              <MenuItem value={"Owner"}>Owner</MenuItem>
              <MenuItem value={"Dealer"}>Dealer</MenuItem>
              <MenuItem value={"Builder"}>Builder</MenuItem>
            </Select>
          </FormControl>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel6a-content">
          <Typography>Area</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography gutterBottom>Area (in sq ft)</Typography>
          <Slider value={area} onChange={handleAreaChange} valueLabelDisplay="auto" min={100} max={10000} />
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
