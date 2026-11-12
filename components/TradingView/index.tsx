"use client";

import { cn } from "@/lib/utils";
import { EconomicCalendar, MarketOverview, StockHeatmap, Timeline } from "react-ts-tradingview-widgets";

interface TradingViewWidgetProps {
  title?: string;
  height?: number;
  className?: string;
}

const TradingViewWidget = ({
  title,
  height = 500,
  className,
}: TradingViewWidgetProps) => {
  return (
    <div className="w-full">
      {title && (
        <h3 className="font-semibold text-2xl text-gray-100 mb-5">{title}</h3>
      )}
      <div className={cn("tradingview-widget-container", className)}>
        <div className="tradingview-widget-container">
          {title === "Market Overview" && (
            <MarketOverview
              colorTheme="dark"
              height={height}
              width="100%"
              showFloatingTooltip
            />
          )}
          {title === "Stock Heat Map" && (
            <StockHeatmap 
              colorTheme="dark"
              height={height}
              width="100%"
            />
          )}
          {title === "Top Stories" && (
            <Timeline
                colorTheme="dark"
                height={height}
                width="100%" 
            />
          )}
          {title === "Economic Calendar" && (
            <EconomicCalendar  
              colorTheme="dark"
              height={height}
              width="100%"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default TradingViewWidget;
