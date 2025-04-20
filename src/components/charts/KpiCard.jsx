import { ArrowUp, ArrowDown, Minus } from 'lucide-react';
import Card from '../ui/Card';

const KpiCard = ({
  title,
  value,
  percentChange,
  icon,
  trend = 'neutral',
  trendLabel,
  trendPeriod = 'vs. last period',
  valuePrefix = '',
  valueSuffix = '',
  loading = false,
  onClick,
  className = '',
}) => {
  const calculateTrend = () => {
    if (trend === 'auto') {
      return percentChange > 0 ? 'up' : percentChange < 0 ? 'down' : 'neutral';
    }
    return trend;
  };

  const currentTrend = calculateTrend();
  
  const trendColors = {
    up: {
      text: 'text-green-600',
      bg: 'bg-green-100',
      icon: <ArrowUp className="h-3 w-3" />,
    },
    down: {
      text: 'text-red-600',
      bg: 'bg-red-100',
      icon: <ArrowDown className="h-3 w-3" />,
    },
    neutral: {
      text: 'text-gray-600',
      bg: 'bg-gray-100',
      icon: <Minus className="h-3 w-3" />,
    },
  };

  const trendColor = trendColors[currentTrend] || trendColors.neutral;
  
  const formattedPercentChange = percentChange !== null && percentChange !== undefined
    ? `${percentChange > 0 ? '+' : ''}${percentChange.toFixed(1)}%`
    : '';

  return (
    <Card 
      className={`${className} ${onClick ? 'cursor-pointer transition-all hover:shadow-md' : ''}`}
      onClick={onClick}
    >
      <div className="flex flex-col space-y-3">
        <div className="flex justify-between items-start">
          <h3 className="text-sm font-medium text-gray-500">{title}</h3>
          {icon && <div className="p-2 rounded-full bg-blue-50">{icon}</div>}
        </div>
        
        {loading ? (
          <div className="h-8 w-24 animate-pulse bg-gray-300 rounded"></div>
        ) : (
          <div className="text-2xl font-bold">
            {valuePrefix}{value}{valueSuffix}
          </div>
        )}
        
        {percentChange !== null && percentChange !== undefined && (
          <div className="flex items-center space-x-1">
            <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${trendColor.bg} ${trendColor.text}`}>
              {trendColor.icon}
              <span className="ml-1">{formattedPercentChange}</span>
            </span>
            <span className="text-xs text-gray-500">
              {trendLabel || trendPeriod}
            </span>
          </div>
        )}
      </div>
    </Card>
  );
};

export default KpiCard; 