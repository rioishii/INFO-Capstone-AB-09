import React, { useState } from "react"
import clsx from "clsx"
import { Link } from "gatsby"
import PerfectScrollbar from "react-perfect-scrollbar"
import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/styles"
import {
  Card,
  CardActions,
  CardHeader,
  CardContent,
  Button,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tooltip,
  TableSortLabel,
} from "@material-ui/core"
import ArrowRightIcon from "@material-ui/icons/ArrowRight"

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0,
  },
  inner: {
    minWidth: 800,
  },
  statusContainer: {
    display: "flex",
    alignItems: "center",
  },
  status: {
    marginRight: theme.spacing(1),
  },
  actions: {
    justifyContent: "flex-end",
  },
}))

const LatestOrders = props => {
  const { className, foodScores, ...rest } = props

  const classes = useStyles()

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <CardHeader
        action={
          <Button color="primary" size="small" variant="outlined">
            <Link to="/app/upload">New entry</Link>
          </Button>
        }
        title="Latest Uploads"
      />
      <Divider />
      <CardContent className={classes.content}>
        <PerfectScrollbar>
          <div className={classes.inner}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sortDirection="desc">
                    <Tooltip enterDelay={300} title="Sort">
                      <TableSortLabel active direction="desc">
                        Date
                      </TableSortLabel>
                    </Tooltip>
                  </TableCell>
                  <TableCell>Food Name</TableCell>
                  <TableCell>Score</TableCell>
                  <TableCell>Equivalent Driving Miles</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {foodScores.map(order => (
                  <TableRow hover key={order.id}>
                    <TableCell>{order.createdAt}</TableCell>
                    <TableCell>{order.foodName}</TableCell>
                    <TableCell>{order.score}</TableCell>
                    <TableCell>{order.miles}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </PerfectScrollbar>
      </CardContent>
      <Divider />
      <CardActions className={classes.actions}>
        <Button color="primary" size="small" variant="text">
          View all <ArrowRightIcon />
        </Button>
      </CardActions>
    </Card>
  )
}

LatestOrders.propTypes = {
  className: PropTypes.string,
}

export default LatestOrders
