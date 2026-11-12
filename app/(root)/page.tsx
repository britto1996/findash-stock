import TradingViewWidget from "@/components/TradingView"
import { MARKET_OVERVIEW_WIDGET_CONFIG } from "../constants/trading_view_widget"
import { MarketOverview } from "react-ts-tradingview-widgets" 

const HomePage = () => {
  return (
    <div className="flex min-h-screen home-wrapper py-8">
        <section className="grid w-full gap-8 home-section">
          <div className="md:col-span-1 xl:col-span-1">
            <TradingViewWidget
              title="Market Overview"
              className="custom-chart"
              height={500}
            />
          </div>
          <div className="md:col-span-1 xl:col-span-2">
            <TradingViewWidget
              title="Stock Heat Map"
              className="custom-chart"
              height={500}
            />
          </div>
          <div className="h-full md:col-span-1 xl:col-span-1">
            <TradingViewWidget
              title="Top Stories"
              className="custom-chart"
              height={500}
            />
          </div>
          <div className="h-full md:col-span-1 xl:col-span-2">
            <TradingViewWidget
              title="Economic Calendar"
              className="custom-chart"
              height={500}
            />
          </div>
        </section>
    </div>
  )
}

export default HomePage