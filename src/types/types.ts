import {
  annotationCallout,
  annotationCalloutCurve,
  annotationCalloutCircle
} from 'd3-svg-annotation'

export interface AnnotationData {
  date: string
  close: number | null
}

export interface AnnotationNote {
  label: string
  title: string
}

export interface Annotation<T> {
  id: string
  note: AnnotationNote
  data?: T /*AnnotationData*/
  dx?: number
  dy?: number
  type?: typeof annotationCallout | typeof annotationCalloutCurve | typeof annotationCalloutCircle
  connector?: {
    points: number[][]
  }
  color?: string
  x?: number
  y?: number
  subject?: {
    radius: number
    radiusPadding: number
  }
}

export interface ChartDataItem {
  date: Date
  value: number
}

export interface ChartDimensions {
  width: number
  height: number
  margin: {
    top: number
    right: number
    bottom: number
    left: number
  }
}

export interface ScaleOptions {
  xScale: d3.ScaleTime<Date, number> | null
  yScale: d3.ScaleLinear<number, number> | null
}

export interface InverseAccessors<T> {
  date: (d: T) => string
  close: (d: T) => number
}
