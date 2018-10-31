import { alignOptions, aggOptions } from './constants';
import uniqBy from 'lodash/uniqBy';

export const extractServicesFromMetricDescriptors = metricDescriptors => uniqBy(metricDescriptors, 'service');

export const getMetricTypesByService = (metricDescriptors, service) =>
  metricDescriptors.filter(m => m.service === service);

export const getAlignmentOptionsByMetric = (metricValueType, metricKind) => {
  return !metricValueType
    ? []
    : alignOptions.filter(i => {
        return i.valueTypes.indexOf(metricValueType) !== -1 && i.metricKinds.indexOf(metricKind) !== -1;
      });
};

export const getAggregationOptionsByMetric = (valueType, metricKind) => {
  return !metricKind
    ? []
    : aggOptions.filter(i => {
        return i.valueTypes.indexOf(valueType) !== -1 && i.metricKinds.indexOf(metricKind) !== -1;
      });
};