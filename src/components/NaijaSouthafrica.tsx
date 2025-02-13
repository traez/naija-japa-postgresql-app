"use client";
import { useContext } from "react";
import { StateContext } from "@/lib/StateProvider";
//import data from "@/lib/data100southafrica.json";

const NaijaSouthafrica = () => {
  const { s4data, loading } = useContext(StateContext)!;

  if (loading) {
    return (
      <div className="text-xl font-semibold my-4 px-4">
        Loading Nigerians in South Africa...
      </div>
    );
  }

  if (!s4data.s4southafrica.length) {
    return (
      <div className="text-xl font-semibold my-4 px-4">
        No data available for Nigerians in South Africa.
      </div>
    );
  }

  return (
    <>
      <article className="bg-[#b2d3c2]">
        <div className="text-xl font-semibold py-4 px-4">
          Nigerians in South Africa
        </div>
        <section className="grid grid-cols-[repeat(auto-fit,_minmax(165px,_1fr))] gap-4">
          {s4data.s4southafrica.map((item, index) => (
            <article
              key={item.user_id || index}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all"
            >
              <div className="text-lg font-bold mb-2">
                {item.first_name} {item.last_name}
              </div>
              <div className="text-sm text-gray-500 mb-2">{item.city}</div>

              {/* Displaying additional user information with updated class names */}
              <div className="text-sm mb-1">
                <strong className="text-colorProperty">Age:</strong>{" "}
                <span className="text-colorValue">{item.age}</span>
              </div>
              <div className="text-sm mb-1">
                <strong className="text-colorProperty">Sex:</strong>{" "}
                <span className="text-colorValue">{item.sex}</span>
              </div>
              <div className="text-sm mb-1">
                <strong className="text-colorProperty">Marital Status:</strong>{" "}
                <span className="text-colorValue">{item.marital_status}</span>
              </div>
              <div className="text-sm mb-1">
                <strong className="text-colorProperty">
                  Number of Children:
                </strong>{" "}
                <span className="text-colorValue">
                  {item.number_of_children}
                </span>
              </div>
              <div className="text-sm mb-1">
                <strong className="text-colorProperty">
                  Languages Spoken:
                </strong>{" "}
                <span className="text-colorValue">{item.languages_spoken}</span>
              </div>
              <div className="text-sm mb-1">
                <strong className="text-colorProperty">Religion:</strong>{" "}
                <span className="text-colorValue">{item.religion}</span>
              </div>
              <div className="text-sm mb-1">
                <strong className="text-colorProperty">
                  Year of Moving (Japa Year):
                </strong>{" "}
                <span className="text-colorValue">{item.japa_year}</span>
              </div>
              <div className="text-sm mb-1">
                <strong className="text-colorProperty">Occupation:</strong>{" "}
                <span className="text-colorValue">{item.occupation}</span>
              </div>
              <div className="text-sm mb-1">
                <strong className="text-colorProperty">Hobbies:</strong>{" "}
                <span className="text-colorValue">{item.hobbies}</span>
              </div>
            </article>
          ))}
        </section>
      </article>
    </>
  );
};

export default NaijaSouthafrica;
