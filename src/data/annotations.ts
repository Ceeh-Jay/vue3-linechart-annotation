import { isoParse } from 'd3'
import {
  annotationCallout,
  annotationCalloutCurve,
  annotationCalloutCircle
} from 'd3-svg-annotation'

import type { ChartDataItem, Annotation, AnnotationData } from '@/types/types'

export const getDateData = (datestring: string, data: ChartDataItem[]) => {
  /*
    Returns the first item in a data whose date property matches the provided datestring
    Args:
      data: an array of data points to filter on
      datestring: a string representing a datetime
  */
  const daysAreEqual = (dayA: Date, dayB: Date): boolean => {
    /* True if two datetimes occur on the same day */
    return (
      dayA.getDate() === dayB.getDate() &&
      dayA.getMonth() === dayB.getMonth() &&
      dayA.getFullYear() == dayB.getFullYear()
    )
  }

  const parseTime = isoParse
  const filtered = data.filter((x) => daysAreEqual(x.date, parseTime(datestring)!))
  return {
    date: datestring,
    close: filtered[0].value
  }
}

export const initialAnnotations:Annotation<AnnotationData>[] = [
  {
    id: 'bitcoin-cash-fork',
    note: {
      label: 'Bitcoin splits into Bitcoins and Bitcoin Cash',
      title: '08-01-2017'
    },
    data: {
      date: '2017-08-01T00:00',
      close: null // To be populated by getDateData
    },
    dx: -15,
    dy: -57
  },
  {
    id: 'china-shutdown-exchanges',
    note: {
      label: 'China shuts down all crypto exchanges',
      title: '09-15-2017'
    },
    data: {
      date: '2017-09-15T00:00',
      close: null
    },
    dx: -18,
    dy: -50
  },
  {
    id: 'segwit-2x-delayed',
    type: annotationCallout, // this type of annotation draws a line under your label.
    note: {
      label: 'Segwit2X delayed',
      title: '11-08-2017'
    },
    data: {
      date: '2017-11-08T00:00',
      close: null
    },
    dx: -2,
    dy: 104
  },
  {
    id: 'cross-ten-thousand',
    type: annotationCalloutCurve, // this type of annotation lets you used a curved connector.
    note: {
      label: 'First time over $10k',
      title: '11-28-2017'
    },
    connector: {
      // pass the connector an array of points to define your curve.
      points: [
        [-9, -24],
        [-30, -44.6]
      ]
    },
    data: {
      date: '2017-11-28T00:00',
      close: null
    },
    dx: -53,
    dy: -47
  },
  {
    id: 'all-time-high',
    note: {
      label: 'First time over $20k',
      title: '12-16-2017'
    },
    data: {
      date: '2017-12-16T00:00',
      close: null
    },
    dx: -102,
    dy: 2
  },
  {
    id: 'segwit-2x-hard-fork',
    note: {
      label: 'Segwit2X hard fork',
      title: '12-29-2017'
    },
    data: {
      date: '2017-12-29T00:00',
      close: null
    },
    dx: -4,
    dy: 89
  },
  {
    id: 'valley-of-uncertainty',
    note: {
      label: 'What caused this rapid drop + rebound?',
      title: "Jan - Feb '18"
    },
    color: '#ef4837', // Brighter color to make this annotation stand out
    x: 803,
    y: 336,
    dx: -5,
    dy: 115,
    subject: {
      radius: 52,
      radiusPadding: 5
    },
    type: annotationCalloutCircle // This annotation refers to an area rather than a point
  }
]
